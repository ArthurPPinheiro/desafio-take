const express = require('express');
const app = express();
const request = require('request');

var github = '';
var api_return = {
    'itemType': "application/vnd.lime.document-select+json",
    'items': []
};
var options = {
    url: 'https://api.github.com/orgs/takenet/repos?sort=created&direction=asc&per_page=5&page=1',
    headers: {'user-agent': 'node.js'},
    json: true
};

request(options, function(error, response, body) {
    github = body[1];
    for (let i = 0; i < body.length; i++) {
        api_return['items'].push({
            header: {
                type: "application/vnd.lime.media-link+json",
                value: {
                    title: body[i].name,
                    text: body[i].description,
                    type: "image/jpeg",
                    uri: body[i].owner.avatar_url
                }
            },
        });
        
    }
});

app.post('/api/github', function(req, res){
    res.status(402);
    res.send(api_return);
});

app.listen(process.env.PORT || 3000);