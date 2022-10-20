const http = require('http');
const fs = require('fs');
const mime = require('mime-types');

let lookup = mime.lookup;//alias for mime.lookup
const port = 5000;

const server = http.createServer(function (req, res)
{
    let path = req.url;
    if (path == "/" || path == "/home")
    {
        path = "/index.html";
    }
    let mime_type = lookup(path.substring(1));
    console.log(`MIME TYPE:${mime_type}`);

    fs.readFile(`__dirname: ${__dirname}`, function (err, data)
    {
        if (err) {
            res.writeHead(404);// status - file not found
            return res.end("ERROR:404 -File Not Found");//output the error message to the page
        }
        //no error
        res.setHeader("X-Content-Type-Options","nosniff")// security guard
        res.writeHead(200, { 'Content-Type': mime_type });// status - all ok
        console.log(`Full File Name: ${__dirname}${req.url}`);
        return res.end(data); //outputs the file to the browser
    });
});

server.listen(port, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});