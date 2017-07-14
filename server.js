var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

var cors = require('cors')

var routes = require('./api/routes/schibstedRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);