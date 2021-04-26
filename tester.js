var fs = require('fs');
var bayes = require('bayes');

var cls;

(async () => {
    var model = await JSON.parse(fs.readFileSync('model.json', 'utf8')); // TODO replace with API getting model.json

    cls = await bayes.fromJson(model);

    var resp = await cls.categorize('ini semua berkat berkah');

    await console.log(resp);
})();

exports.cls = cls;