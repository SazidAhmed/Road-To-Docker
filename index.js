const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('App is running inside docker container. Boom !!! Boom');
})

app.listen(8080, () => {
    console.log('App is running inside docker container')
})
