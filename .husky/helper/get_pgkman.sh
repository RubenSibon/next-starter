#!/bin/sh

if [ -f "pnpm-lock.yaml" ] && command -v pnpx > /dev/null; then
  PGKMAN=pnpx
elif [ -f "yarn.lock" ] && command -v yarn > /dev/null; then
  PKGMAN=yarn
else
  PGKMAN=npx
fi
