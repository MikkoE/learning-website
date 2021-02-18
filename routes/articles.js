const express = require('express');
const Article = require('./../models/articles');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/new');
});

router.get('/:id', (req, res) => {

});

router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        await article.save();
        res.redirect(`/articles/${article.id}`);
    } catch (error) {
        res.render('articles/new', { aricle: article});
    }
    
});

router.get('/', (req, res) => {
    const articles = [{
        title: 'Test article',
        createdAt: new Date(),
        description: 'Test description'

    },
    {
        title: 'Test article 2',
        createdAt: new Date(),
        description: 'Test description 2'

    }]
    res.render('articles/index', { articles: articles});
})

module.exports = router;