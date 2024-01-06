#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "${DIR}/../.env"

DEPLOY_BUCKET=${NEXT_PUBLIC_DEPLOYMENT_DOMAIN#https://}
DEPLOY_PREFIX=${NEXT_PUBLIC_BASE_PATH#/}

set -e

# Forcibly sync everything but the CDN assets
echo "+ Uploading non-CDN files"
aws s3 sync \
  --profile personal \
  --delete \
  --sse AES256 \
  --cache-control "max-age=30" \
  --exclude "_next/*" \
  out/ \
  "s3://${DEPLOY_BUCKET}/${DEPLOY_PREFIX}/"

# Forcibly sync all of the CDN assets
echo "+ Uploading CDN assets"
aws s3 sync \
  --profile personal \
  --delete \
  --sse AES256 \
  --cache-control "max-age=3153600000" \
  out/_next/ \
  "s3://${DEPLOY_BUCKET}/${DEPLOY_PREFIX}/_next/"
