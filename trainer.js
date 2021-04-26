var fs = require('fs');
var train = JSON.parse(fs.readFileSync('train.json', 'utf8'));

var bayes = require('bayes');

var classifier = bayes();
(async () => {

    train.forEach(async (data, index) => {
        await classifier.learn(data.text, data.label)
    });

    var resp = await classifier.categorize('ini semua berkat berkah');
    await console.log(resp);


    var stateJson = await classifier.toJson();

    await fs.writeFileSync('./model.json', JSON.stringify(stateJson));

})();