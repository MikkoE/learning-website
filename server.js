const express = require('express');
const mongoose = require('mongoose');
const articlerouter = require('./routes/articles');
const methodOverride = require('method-override');
const Article = require('./models/articles')
const app = express();

mongoose.connect('mongodb://192.168.178.114:37017/demo-blogs', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));



app.get('/', async (req, res) => {
    
    res.send("Hello World!")
  })

app.use('/articles', articlerouter);

app.listen(5000);