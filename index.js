const express = require('express');
const app = express();

const hostname = 'https://api.github.com/';
const path = 'repos/takenet/ServiceStack.Text';
request(`https://api.github.com/repos/takenet/ServiceStack.Text`, (error, response, body) => {
    var github = body;
    var github_response = response;
})

app.get('/api/github', function(req, res){
    res.json(github_response);
});

app.listen(process.env.PORT || 3000);