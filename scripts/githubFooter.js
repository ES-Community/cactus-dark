const repos = 'https://github.com/ES-Community/ES-Community.github.io'

hexo.extend.helper.register('githubBlame', ({ url }) => `${repos}/blame/source/source/${url}`)
hexo.extend.helper.register('githubCommits', ({ url }) => `${repos}/commits/source/source/${url}`)