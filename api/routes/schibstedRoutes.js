
//TO DO - Create better dynamic routes, but I prefer focus on Front End
module.exports = function(app) {

    var schibstedBE = require('../controllers/schibstedController');

    app.route('/advertiser/')
        .get(schibstedBE.list_advertisers);

};
