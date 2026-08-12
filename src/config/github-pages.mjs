export function getGitHubPagesConfig(repository) {
  if (!repository) {
    return {
      site: 'http://localhost:4321',
      base: '/',
    };
  }

  const [owner, repositoryName] = repository.split('/');

  if (!owner || !repositoryName) {
    throw new Error(`无效的 GITHUB_REPOSITORY：${repository}`);
  }

  const isUserSite = repositoryName.toLowerCase() === `${owner.toLowerCase()}.github.io`;

  return {
    site: `https://${owner}.github.io`,
    base: isUserSite ? '/' : `/${repositoryName}`,
  };
}

export function withBasePath(base, path = '') {
  const normalizedBase = base === '/' ? '' : `/${base.replace(/^\/+|\/+$/g, '')}`;
  const normalizedPath = path.replace(/^\/+/, '');

  return `${normalizedBase}/${normalizedPath}`;
}
