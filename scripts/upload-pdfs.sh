#!/bin/bash
# Usage: GITHUB_TOKEN=ghp_xxx RELEASE_ID=339036992 bash scripts/upload-pdfs.sh
TOKEN="${GITHUB_TOKEN}"
RELEASE_ID="${RELEASE_ID:-339036992}"
UPLOAD_URL="https://uploads.github.com/repos/paulwambaria/wagtech-africa/releases/${RELEASE_ID}/assets"
BASE_DIR="$(dirname "$0")/../public/brochures"

upload_pdf() {
  local filepath="$1"
  local filename=$(basename "$filepath")
  echo -n "Uploading $filename ... "
  curl -s -X POST \
    -H "Authorization: token $TOKEN" \
    -H "Content-Type: application/pdf" \
    --data-binary @"$filepath" \
    "$UPLOAD_URL?name=$filename" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('browser_download_url','ERROR'))"
}

for f in "$BASE_DIR/en/"*.pdf; do upload_pdf "$f"; done
for f in "$BASE_DIR/fr/"*.pdf; do upload_pdf "$f"; done
