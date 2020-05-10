
const fs = require('fs');
const path = require('path');
// const fileJSON = require('../data/ta03.json');

function processJson(req, res) {

    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'ta03.json');
    fs.readFile(p, (err, fileContent) => {
        let data = JSON.parse(fileContent);
        console.log(data);

        
        res.render('pages/ta03', { 
                    title: 'Team Activity 03',
                    data: data,
                    path: '/ta03', // For pug, EJS 
                    activeTA03: true, // For HBS
                    contentCSS: true, // For HBS
                });
    });
    // let rawdata = fs.readFileSync('../data/ta03.json');
    // let data = JSON.parse(rawdata);
    // console.log(data);
}

module.exports = {processJson: processJson};