const express = require('express');
const path = require('path');
const app = express();

const shareRouter = require('./src/routes/router-share');

app.use('/assets',express.static(path.join(__dirname, 'src/assets')));
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine','hbs');

app.use('/share', shareRouter);

let PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server Berjalan di Port : '+PORT+'...');
});