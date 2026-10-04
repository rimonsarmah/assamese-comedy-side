#!/usr/bin/env bash
# Build the static site and publish ./out to the gh-pages branch.
set -euo pipefail
cd "$(dirname "$0")/.."

npm run build
touch out/.nojekyll   # GitHub Pages must serve the _next/ folder

tmp=$(mktemp -d)
git worktree add --force "$tmp" --detach
(
  cd "$tmp"
  git checkout --orphan gh-pages-tmp
  git rm -rf --quiet . || true
  cp -R "$OLDPWD/out/." .
  git add -A
  git commit --quiet -m "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
  git push --force origin HEAD:gh-pages
)
git worktree remove --force "$tmp"
git branch -D gh-pages-tmp >/dev/null 2>&1 || true
echo "Deployed to gh-pages."
