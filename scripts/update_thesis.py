import os
import json
import re
from datetime import datetime
import requests

ISM_PATH = 'data/ism.json'
STATE_PATH = 'data/thesis_state.json'
MD_PATH = 'src/data/blog/2026-portfolio-log.md'

def get_fred_data(series_id, api_key, units='lin'):
    """Fetches the two most recent data points for a given FRED series ID with optional unit transformations."""
    url = f"https://api.stlouisfed.org/fred/series/observations?series_id={series_id}&api_key={api_key}&file_type=json&sort_order=desc&limit=2&units={units}"
    response = requests.get(url)
    response.raise_for_status()
    observations = response.json().get('observations', [])
    
    current_val = float(observations[0]['value'])
    prior_val = float(observations[1]['value'])
    return current_val, prior_val

def main():
    api_key = os.environ.get('FRED_API_KEY')
    if not api_key:
        raise ValueError("FRED_API_KEY environment variable is missing.")

    with open(ISM_PATH, 'r') as f:
        ism_data = json.load(f)

    prior_state = {}
    if os.path.exists(STATE_PATH):
        with open(STATE_PATH, 'r') as f:
            prior_state = json.load(f)

    table_rows = []
    current_state_to_save = {'ism': ism_data, 'fred': {}}

    # --- PROCESS MANUAL ISM DATA ---
    for key, current_val in ism_data.items():
        prior_val = prior_state.get('ism', {}).get(key, current_val)
        delta = current_val - prior_val
        metric_name = key.replace('_', ' ').title()
        
        status = "Expansion" if current_val > 50 else "Contraction"
        implication = "Accelerating" if delta >= 0 else "Decelerating"
        
        # Format explicitly for ISM points
        table_rows.append(f"| **{metric_name}** | {prior_val:.1f} | {current_val:.1f} | {delta:+.1f} pts | {status} | {implication} |")

    # --- PROCESS TRANSFORMED FRED DATA ---
    # Configure exact tracking specifications for your layout
    fred_metrics = {
        'Fed Funds Target Rate': {'id': 'FEDFUNDS', 'units': 'lin', 'suffix': '%'},
        'CPI (Inflation)': {'id': 'CPIAUCSL', 'units': 'pc1', 'suffix': '%'},          # pc1 = Percent Change From Year Ago
        'Total Nonfarm Payrolls': {'id': 'PAYEMS', 'units': 'chg', 'suffix': 'k'},       # chg = Change from prior month in thousands
        'PPI: Corrugated Boxes': {'id': 'WPU09150301', 'units': 'lin', 'suffix': ''}
    }

    for name, spec in fred_metrics.items():
        try:
            current_val, prior_val = get_fred_data(spec['id'], api_key, units=spec['units'])
            delta = current_val - prior_val
            current_state_to_save['fred'][spec['id']] = current_val
            
            sfx = spec['suffix']
            status = "Rising" if delta > 0 else "Falling/Stable"
            implication = "Monitoring Shift" if abs(delta) > 0.05 else "Stable Baseline"
            
            table_rows.append(
                f"| **{name}** | {prior_val:.2f}{sfx} | {current_val:.2f}{sfx} | {delta:+.2f}{sfx} | {status} | {implication} |"
            )
        except Exception as e:
            print(f"Skipping {name} due to fetch error: {e}")

    table_header = [
        "| Metric | Prior Read | Current Read | Delta | Status | Implication |",
        "| :--- | :--- | :--- | :--- | :--- | :--- |"
    ]
    full_table_markdown = "\n".join(table_header + table_rows)

    with open(MD_PATH, 'r', encoding='utf-8') as f:
        doc_content = f.read()

    today_str = datetime.today().strftime("%m.%d.%Y")
    doc_content = re.sub(r'<!-- AUTO-DATE -->.*?<!-- /AUTO-DATE -->', f'<!-- AUTO-DATE -->{today_str}<!-- /AUTO-DATE -->', doc_content)
    doc_content = re.sub(r'<!-- AUTO-TABLE-START -->.*?<!-- AUTO-TABLE-END -->', f'<!-- AUTO-TABLE-START -->\n\n{full_table_markdown}\n\n<!-- AUTO-TABLE-END -->', doc_content, flags=re.DOTALL)

    with open(MD_PATH, 'w', encoding='utf-8') as f:
        f.write(doc_content)

    os.makedirs(os.path.dirname(STATE_PATH), exist_ok=True)
    with open(STATE_PATH, 'w') as f:
        json.dump(current_state_to_save, f, indent=2)

    print("Successfully synchronized dashboard metrics.")

if __name__ == "__main__":
    main()
