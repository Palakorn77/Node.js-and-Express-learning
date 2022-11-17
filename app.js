const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')


const app = express();
const port = 5000;

app.use(morgan('combined'))

app.get('/', (req,res) =>{
    res.send('Hello Palakorn')
})

app.listen(port, ()=>{
    debug('listening is on %d', chalk.green(port))
})