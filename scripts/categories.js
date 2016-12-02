const pagination = require('hexo-pagination');

hexo.extend.generator.register('category-repository-page', function(locals) {
    return {
        path: 'categories/index.html',
        layout: ['categories'],
        data: locals.categories
    }
});