const express = require('express');
const app = express();

const loginRoutes = require('./src/routes/router-login');

app.use('/login', loginRoutes);

let PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server Berjalan di Port : '+PORT+'...');
});