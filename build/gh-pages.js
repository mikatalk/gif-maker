const gh = require('gh-pages')

gh.publish('dist', (err) => console.log('Done.'))
