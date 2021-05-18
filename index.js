const express = require('express');
const app = express();
const request = require('request');

let github = '';
var options = {
    url: 'https://api.github.com/orgs/takenet/repos?sort=created&direction=asc&per_page=5&page=1',
    headers: {'user-agent': 'node.js'},
};

request(options, (error, response, body) => {
    github = body;
});

var api_return = Object.keys(github).map((key) => [key, github[key]]);

console.log(api_return);

app.get('/api/github', function(req, res){
    res.json("");
});

app.listen(process.env.PORT || 3000);