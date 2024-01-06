#!/bin/bash

DEPLOY_BUCKET="milligan.news"
DEPLOY_PREFIX="ice-breakr"

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
  "s3://${BUCKET}/${PREFIX}/_next/"
