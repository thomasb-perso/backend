

exports.list_advertisers = function(req, res) {
    var fs = require('fs');
    var xml = require('xml');
    var format = req.query.format;
    //var format =  'json';
    fs.readFile('./mockdata/response.'+format, 'utf8', function(err, task) {
        if (err){res.send(err);}
        else{
            res.setHeader('Access-Control-Allow-Origin', '*');
            if("json"==format){res.json(JSON.parse(task));}
            if("xml"==format){
                res.set('Content-Type', 'text/xml');
                res.send(task);
            }

        }

    });
};