const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve(__dirname, '../client')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});

//server listening to port 8000
app.listen(8000, () => console.log('The server is running port 8000...'));

