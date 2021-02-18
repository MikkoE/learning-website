const express = require('express');
const mongoose = require('mongoose');
const articlerouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://192.168.178.114:37017/demo-blogs', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));

app.use('/articles', articlerouter);

app.get('/', (req, res) => {
    
    res.send("Hello World!");
})

app.listen(5000);