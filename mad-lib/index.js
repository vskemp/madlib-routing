const fs = require('fs');
const http = require('http');

let body = "";
fs.readFile('./madlib.html', function (err, data) {
    if (err) throw err;
    body = data.toString();
});

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    let name = req.url.substring(1,req.url.length);
    newString = body.replace("***NAME***", name);
    res.end(newString);
});

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
});