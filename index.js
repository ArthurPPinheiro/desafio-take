const express = require('express');
const app = express();

var users = [
    {id: 1, name: "John", email: "john@mail.com", password: "john123"},
    {id: 2, name: "Sarah", email: "sarah@mail.com", password: "sarah123"}
];

app.get('/api/users', function(req, res){
    res.json(users);
});

app.listen(process.env.PORT || 3000);