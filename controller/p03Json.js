const fs = require('fs');
const path = require('path');
// const fileJSON = require('../data/ta03.json');

function processJson(req, res) {

    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'mandalorian.json');
    fs.readFile(p, (err, fileContent) => {
        let data = JSON.parse(fileContent);

        
        res.render('pages/p03', { 
                    title: 'Prove 03',
                    data: data,
                    path: '/p03', // For pug, EJS 
                    activeTA03: true, // For HBS
                    contentCSS: true, // For HBS
                });
    });
    // let rawdata = fs.readFileSync('../data/ta03.json');
    // let data = JSON.parse(rawdata);
    // console.log(data);
}

module.exports = {processJson: processJson};