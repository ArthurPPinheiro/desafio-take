const express = require('express');
const app = express();
const request = require('request');

const hostname = 'https://api.github.com/';
const path = 'repos/takenet/ServiceStack.Text';
request(`https://api.github.com/repos/takenet/ServiceStack.Text`, (error, response, body) => {
    let github = '';
    github = body;
})

app.get('/api/github', function(req, res){
    res.json(github);
});

app.listen(process.env.PORT || 3000);