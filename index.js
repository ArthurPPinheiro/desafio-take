const express = require('express');
const app = express();
const request = require('request');

const hostname = 'https://api.github.com/';
const path = 'repos/takenet/ServiceStack.Text';
let github = '';
var options = {
    host: 'api.github.com',
    path: '/orgs/takenet/repos',
    method: 'GET',
    headers: {'user-agent': 'node.js'},
    sort:created,
    direction:asc,
    per_page:5,
    page:1
};
request(options, (error, response, body) => {
    console.log(body);
    console.log(response)
})
app.get('/api/github', function(req, res){
    res.json('');
});

app.listen(process.env.PORT || 3000);