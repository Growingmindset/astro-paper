import os
import json
import re
from datetime import datetime
import requests

ISM_PATH = 'data/ism.json'
STATE_PATH = 'data/thesis_state.json'
MD_PATH = 'src/data/blog/2026-portfolio-log.md'

def get_fred_data(series_id, api_key, units='lin'):
    """Fetches the two most recent data points from FRED with structural unit transformations."""
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

    # --- 1. PROCESS ISM DATA (Manual Inputs - Marked with ✍️) ---
    # Manufacturing PMI
    pmi_curr = ism_data.get('manufacturing_pmi', 50.0)
    pmi_prior = prior_state.get('ism', {}).get('manufacturing_pmi', pmi_curr)
    pmi_delta = pmi_curr - pmi_prior
    pmi_status = "Expansion (Bullish)" if pmi_curr > 50 else ("Extreme Contraction" if pmi_curr < 42.3 else "Contraction")
    pmi_impl = "Accelerating Momentum" if pmi_delta >= 0 else "Decelerating Growth"
    table_rows.append(f"| ✍️ **ISM Manufacturing PMI** | {pmi_prior:.1f} | {pmi_curr:.1f} | {pmi_delta:+.1f} pts | {pmi_status} | {pmi_impl} |")

    # New Orders
    no_curr = ism_data.get('new_orders', 50.0)
    no_prior = prior_state.get('ism', {}).get('new_orders', no_curr)
    no_delta = no_curr - no_prior
    no_status = "**Leading Expansion**" if no_curr > 50 else "Leading Contraction"
    no_impl = "Telegraphs Forward Growth 3-6M" if no_curr > 50 else "Forward Demand Cooling"
    table_rows.append(f"| ✍️ **ISM New Orders** | {no_prior:.1f} | {no_curr:.1f} | {no_delta:+.1f} pts | {no_status} | {no_impl} |")

    # Prices Paid
    pp_curr = ism_data.get('prices_paid', 50.0)
    pp_prior = prior_state.get('ism', {}).get('prices_paid', pp_curr)
    pp_delta = pp_curr - pp_prior
    pp_status = "**Currency Debasement**" if pp_curr > 60 else "Price Stability"
    pp_impl = "Capital Rotates to Dollar Hedges" if pp_curr > 60 else "Weak Tailwinds for Hedges"
    table_rows.append(f"| ✍️ **ISM Prices Paid** | {pp_prior:.1f} | {pp_curr:.1f} | {pp_delta:+.1f} pts | {pp_status} | {pp_impl} |")

    # --- 2. PROCESS FRED DATA (Automated API - Marked with ⚡) ---
    fred_metrics = {
        'Fed Funds Target Rate': {'id': 'FEDFUNDS', 'units': 'lin', 'suffix': '%'},
        'CPI (Inflation)': {'id': 'CPIAUCSL', 'units': 'pc1', 'suffix': '%'},
        'Total Nonfarm Payrolls': {'id': 'PAYEMS', 'units': 'chg', 'suffix': 'k'},
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
            
            # The ⚡ emoji is dynamically injected right before the metric name variable here
            table_rows.append(
                f"| ⚡ **{name}** | {prior_val:.2f}{sfx} | {current_val:.2f}{sfx} | {delta:+.2f}{sfx} | {status} | {implication} |"
            )
        except Exception as e:
            print(f"Skipping {name} due to fetch error: {e}")

    # Cache live values to state file
    current_state_to_save['fred'] = {'FEDFUNDS': ff_curr, 'CPIAUCSL': cpi_curr, 'PAYEMS': nfp_curr, 'WPU09150301': box_curr}

    # --- 3. REWRITE MARKDOWN FILE ---
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

    print("Macro engine dashboard synchronized successfully with visual indicators.")

if __name__ == "__main__":
    main()
