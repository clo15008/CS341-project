//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const titleArray = ['Moby Dick'];
const summaryArray = ['This is a book about revenge and sailing.'];

router.post('/addBook', (req, res, next) => { 
    const newTitle = req.body.newTitle;
    const newSummary = req.body.newSummary;
    summaryArray.push(newSummary);
    titleArray.push(newTitle);
    res.redirect('/p02/');
});

router.get('/',(req, res, next) => {
    res.render('pages/p02', { 
        title: 'Ponder 02', 
        titles: titleArray,
        summaries: summaryArray,
        path: '/p02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;