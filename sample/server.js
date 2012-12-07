var express = require('express'),
    lessMiddleware = require('less-middleware'),
    fs = require('fs'),
    path = require('path'),
    app = express.createServer(express.logger()),
    port = 7777,
    dirname = __dirname;

 app.use(lessMiddleware({
        src: __dirname,
        compress: true
    }));

app.use(express.static(dirname));

app.listen(port, function() {
  console.log("serving on port " + port + " files in " + dirname);
});
