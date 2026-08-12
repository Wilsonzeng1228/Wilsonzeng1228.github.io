import assert from 'node:assert/strict';
import test from 'node:test';

import { getGitHubPagesConfig, withBasePath } from '../src/config/github-pages.mjs';

test('用户名主页仓库部署在域名根路径', () => {
  assert.deepEqual(getGitHubPagesConfig('octocat/octocat.github.io'), {
    site: 'https://octocat.github.io',
    base: '/',
  });
});

test('普通仓库部署在仓库名子路径', () => {
  assert.deepEqual(getGitHubPagesConfig('octocat/personal-site'), {
    site: 'https://octocat.github.io',
    base: '/personal-site',
  });
});

test('本地开发不依赖 GitHub 环境变量', () => {
  assert.deepEqual(getGitHubPagesConfig(undefined), {
    site: 'http://localhost:4321',
    base: '/',
  });
});

test('子路径与静态资源之间只保留一个斜杠', () => {
  assert.equal(withBasePath('/personal-site', 'favicon.svg'), '/personal-site/favicon.svg');
  assert.equal(withBasePath('/', 'favicon.svg'), '/favicon.svg');
});
