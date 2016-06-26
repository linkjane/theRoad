var request = require('request');
exports.authweixin = function (req, res) {
    var token = 'iloveyouforever';
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
    var shaObj = new jsSHA('SHA-1', 'TEXT');
    shaObj.update(original);

    var scyptoString = shaObj.getHash('HEX');
    if (signature === scyptoString) {
        console.log('confirm and send echo back');
        res.end(echostr);
    } else {
        console.log('failed');
    }
}

exports.getAccessToken = function (req, res, next) {

    var opt = {};
    var url = opt.url || 'https://api.weixin.qq.com/cgi-bin/token';
    var grant_type = opt.grant_type || 'client_credential';
    var appid = opt.appid || 'wx5c309be77186b598';
    var secret = opt.secret || '1192fdc5002806e64c682c4e23db8d5f';

    url +=  '?grant_type=' + grant_type + '&appid=' + appid + '&secret=' + secret;
    console.log(url);
    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.json(body);
        }
    })

}

exports.bypasssoft = function (req, res) {
    
}





