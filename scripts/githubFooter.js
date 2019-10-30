// Get the deploy repo to use it in github query
const repos = hexo.config.deploy.repo

hexo.extend.helper.register('githubBlame', ({ url }) => `${repos}/blame/source/source/${url}`)
hexo.extend.helper.register('githubCommits', ({ url }) => `${repos}/commits/source/source/${url}`)