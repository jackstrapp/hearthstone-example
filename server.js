var express = require('express');

var setHtmlContentType = function(res, path, stat){ 
    res.setHeader("Content-Type", "text/html; charset=UTF-8"); 
};

var app = express(),
    port = 8666;

app.use('/img', express.static('./img'));
app.use('/css', express.static('./css'));
app.use('/libs', express.static('./libs'));
app.use('/compiled', express.static('./compiled'));
app.use('/deckbuilder.html', express.static('./deckbuilder/index.html', {setHeaders: setHtmlContentType}));
app.use('/', express.static('./main'));

app.listen(port);
console.log('Listening at', port);
