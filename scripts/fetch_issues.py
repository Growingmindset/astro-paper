"""Pull the latest Base Rate issues from the beehiiv RSS feed into JSON.

Run by .github/workflows/update-issues.yml. The site reads the JSON at build
time, so a failed fetch never breaks the site: the old file stays in place.
"""

import html
import json
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime

FEED = "https://rss.beehiiv.com/feeds/3Ev42hk9Fm.xml"
OUT = "src/data/base-rate-issues.json"
LIMIT = 5


def clean(text: str, limit: int = 180) -> str:
    text = re.sub(r"<[^>]+>", " ", html.unescape(text or ""))
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"\s+([.,;:!?])", r"\1", text)
    return text if len(text) <= limit else text[: limit - 1].rsplit(" ", 1)[0] + "…"


def main() -> int:
    req = urllib.request.Request(FEED, headers={"User-Agent": "rudygalan.com issue fetch"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        root = ET.fromstring(resp.read())

    issues = []
    for item in root.iter("item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        if not title or not link:
            continue
        try:
            date = parsedate_to_datetime(item.findtext("pubDate") or "").date().isoformat()
        except (TypeError, ValueError):
            date = ""
        issues.append(
            {
                "title": title,
                "url": link,
                "date": date,
                "summary": clean(item.findtext("description") or ""),
            }
        )

    if not issues:
        print("Feed had no items; leaving file unchanged.")
        return 0

    issues.sort(key=lambda i: i["date"], reverse=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(issues[:LIMIT], f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"Wrote {min(len(issues), LIMIT)} issues.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
