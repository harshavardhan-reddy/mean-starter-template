var express = require('express');
var path = require('path');
var logger = require('tracer').colorConsole();

var router = express.Router();

router.route('*')
    .get(function(req, res) {
        logger.warn(req.url);
        console.log(path.join(__dirname, './..', '/public/views/index.html'));
        res.sendFile(path.join(__dirname, './..', '/public/views/index.html'));
    });

module.exports = function(app) {
    app.use('/', router);
};
