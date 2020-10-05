const express = require('express');
const app = express();

const shareRouter = require('./src/routes/router-share');

app.use('/share', shareRouter);

let PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server Berjalan di Port : '+PORT+'...');
});