const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
    fs.readFile(`__dirname: ${__dirname}`), function (err, data)
    {
        if (err) {
            res.writeHead(404);// status - file not found
            console.log(`ERROR: ${err.message}`);// output to the dev console
            return res.end(err.message);//output the error message to the page
        }
        //no error
            res.writeHead(200);// status - all ok
            console.log(`DATA:${data}`);
    };
});

server.listen(port, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});