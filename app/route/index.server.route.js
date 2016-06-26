var indexCtrl = require('../controller/index.server.controller');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {
            title: 'TheWord'
        });
        // res.json({haha: 'ahaha'})
    })
	
	app.get('/wechat/bypasssoft')
	
}
