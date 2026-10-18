#!/usr/bin/env bash
# Regenerate the résumé PDFs from resume.html with headless Google Chrome.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
OUT="assets/Mostafa_Rafiur_Wasib_General_Technical_CV.pdf"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="$OUT" "file://$PWD/resume.html"
# Older applications and search results link to this second name; keep it identical.
cp "$OUT" "assets/Mostafa_Rafiur_Wasib_AI_ML_CV.pdf"
echo "Wrote $OUT and assets/Mostafa_Rafiur_Wasib_AI_ML_CV.pdf"
