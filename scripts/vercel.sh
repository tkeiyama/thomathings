#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "" ]]; then
  echo "🛑 - Build cancelled because of the ignored branch"
  exit 0;

else
  echo "✅ - Build can proceed"
  exit 1;
fi
