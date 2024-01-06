import { env } from '@/env';

// Deployment domain plus base path with single trailing slash even if
// basePath is just a single slash
const baseUrl = new URL(
  `${env.NEXT_PUBLIC_BASE_PATH}/`.replace(/[\/]+$/, '/'),
  env.NEXT_PUBLIC_DEPLOYMENT_DOMAIN,
);

export default function getAssetUrl(path: string) {
  return new URL(path, baseUrl).href;
}
