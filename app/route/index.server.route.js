module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {
            title: 'TheWord'
        });
        
    })
	app.get('/interface', function(req, res){
		var token = 'iloveyouforver';
		var signature = req.query.signature;
		var timestamp = req.query.timestamp;
		var echostr = req.query.echostr;
		var nonce = req.query.nonce;
		
		var oriArray = [];
		oriArray[0] = nonce;
		oriArray[1] = timestamp;
		oriArray[2] = token;
		oriArray.sort();
		
		var original = oriArray.join('');
		var jsSHA = require('jssha');
		var shaObj = new jsSHA(original, 'TEXT');
		console.log(1);
		var scyptoString = shaObj.getHash('SHA-1', 'HEX');
		console.log(2);
		if (signature === scyptoString) {
			console.log('confirm and send echo back');
			res.end(echostr);
		} else {
			console.log('failed');
		}

	} )
}
