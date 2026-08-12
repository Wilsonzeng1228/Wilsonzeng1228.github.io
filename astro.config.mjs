// @ts-check
import { defineConfig } from 'astro/config';
import { getGitHubPagesConfig } from './src/config/github-pages.mjs';

// https://astro.build/config
export default defineConfig(getGitHubPagesConfig(process.env.GITHUB_REPOSITORY));
