/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,

  reactStrictMode: true,

  output: 'export',

  trailingSlash: true,
};

export default config;
