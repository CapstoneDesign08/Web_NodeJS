﻿var express = require('express');
var request = require('request');
var router = express.Router();

// post헤더 부분
var headers = {
    'User-Agent': 'Super Agent/0.0.1',
    'Content-Type': 'application/x-www-form-urlencoded'
}

// post요청 세부 내용
var options = {
    url: 'http://localhost:1337/upload',
    method: 'POST',
    headers: headers,
    form: { 'id': 1, 'play': 1, 'source' : 'sadf' }
}
  
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
    /*post test
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    })*/
});
  
module.exports = router;