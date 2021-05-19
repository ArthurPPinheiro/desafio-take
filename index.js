const express = require('express');
const app = express();
const request = require('request');

var github = '';
var api_return = [];
var options = {
    url: 'https://api.github.com/orgs/takenet/repos?sort=created&direction=asc&per_page=5&page=1',
    headers: {'user-agent': 'node.js'},
    json: true
};

request(options, function(error, response, body) {
    github = body[1];
    for (let i = 0; i < body.length; i++) {
        api_return.push({
            image: body[i].owner.avatar_url,
            name: body[i].name,
            description: body[i].description,
        });
        
    }
});

app.get('/api/github', function(req, res){
    res.json(api_retorno);
});

app.listen(process.env.PORT || 3000);