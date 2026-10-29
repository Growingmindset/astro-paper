import ledgerCsv from "@/data/nonzero-ledger.csv?raw";

// The Nonzero rules: $20,000 for 2027, split evenly by month. Unused money
// rolls forward, a bad month never borrows from the next, and winnings are
// swept out and never recycled. So "budget used" counts losses only.
//
// To log a session, add a row to src/data/nonzero-ledger.csv:
//   date,game,buy_in,cash_out,grade,note
//   2027-01-04,1/2 NLH cash,300,415,B+,"Folded the river I used to call"
export const YEAR = 2027;
export const TOTAL = 20000;
export const MONTHLY = TOTAL / 12;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export type Session = {
  date: string;
  game: string;
  buyIn: number;
  cashOut: number;
  net: number;
  grade: string;
  note: string;
};

// Small CSV reader that handles quoted fields containing commas.
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (c === '"') quoted = false;
      else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(cell);
      cell = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      cell = "";
      if (row.some(v => v.trim() !== "")) rows.push(row);
      row = [];
    } else cell += c;
  }
  row.push(cell);
  if (row.some(v => v.trim() !== "")) rows.push(row);
  return rows;
}

export function getLedger() {
  const [header = [], ...body] = parseCsv(ledgerCsv);
  const col = (name: string) => header.indexOf(name);

  const sessions: Session[] = body
    .map(r => {
      const buyIn = Number(r[col("buy_in")]);
      const cashOut = Number(r[col("cash_out")]);
      return {
        date: (r[col("date")] ?? "").trim(),
        game: (r[col("game")] ?? "").trim(),
        buyIn,
        cashOut,
        net: cashOut - buyIn,
        grade: (r[col("grade")] ?? "").trim(),
        note: (r[col("note")] ?? "").trim(),
      };
    })
    .filter(
      s =>
        /^\d{4}-\d{2}-\d{2}$/.test(s.date) &&
        s.date.startsWith(String(YEAR)) &&
        Number.isFinite(s.buyIn) &&
        Number.isFinite(s.cashOut)
    )
    .sort((a, b) => b.date.localeCompare(a.date));

  // Monthly rollup with rollover: left = allowance to date minus losses to date.
  let lossToDate = 0;
  const months = MONTHS.map((name, i) => {
    const key = `${YEAR}-${String(i + 1).padStart(2, "0")}`;
    const inMonth = sessions.filter(s => s.date.startsWith(key));
    const loss = inMonth.reduce((sum, s) => sum + Math.max(0, -s.net), 0);
    lossToDate += loss;
    return {
      name,
      key,
      sessions: inMonth.length,
      net: inMonth.reduce((sum, s) => sum + s.net, 0),
      left: MONTHLY * (i + 1) - lossToDate,
    };
  });

  // Show months up to the latest one with a logged session.
  const lastActive = months.reduce((last, m, i) => (m.sessions ? i : last), -1);

  return {
    sessions,
    months: months.slice(0, lastActive + 1),
    net: sessions.reduce((sum, s) => sum + s.net, 0),
    budgetUsed: lossToDate,
    hasData: sessions.length > 0,
  };
}

export const money = (n: number) =>
  (n < 0 ? "−" : "") +
  "$" +
  Math.abs(n).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
