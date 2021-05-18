const express = require('express');
const app = express();
const request = require('request');

const hostname = 'https://api.github.com/';
const path = 'repos/takenet/ServiceStack.Text';
let github = '';
request(`https://api.github.com/orgs/takenet/repos?sort=created&direction=asc&per_page=5&page=1`, (error, response, body) => {
    console.log(response);
})
console.log(body);
app.get('/api/github', function(req, res){
    res.json('');
});

app.listen(process.env.PORT || 3000);