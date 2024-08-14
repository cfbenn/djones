var http = require('http');
var url = require('url');
var anagram = require('./anagramtools');

http.createServer(function (req, res) {

    var q = url.parse(req.url, true);
    var qdata = q.query;
    var path = require("path");
    var fs = require('fs');

    if (req.url === '/favicon.ico')
    {
    return;
    }

    const filePath = path.join(path.resolve(__dirname, './public/webform.html'));
    fs.readFile(filePath, 'utf8', (err, data) => {
        // Check for error
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
            return;
        }

        if (q.pathname === '/compare')
        {
            resultText = qdata.word1 + (isAnagram(qdata.word1, qdata.word2) ? ' = ': ' != ') + qdata.word2
            console.log('result test: ' + resultText);
            data = data.replace('<div id="results" style="visibility: hidden;">', '<div id="results" style="visibility: visible;">')
            data = data.replace('<p id="resulttext">unknown answer</p>', `<p id="resulttext">${resultText}</p>`);
        }

        // Display HTML
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
}).listen(8080);


function isAnagram(word1, word2) {
    return anagram.areAnagrams(word1,word2)
}

