var http = require("http");
const port = process.env.PORT || 10000;
const hostname = process.env.HOSTNAME || "0.0.0.0";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(port, hostname);

console.log(`Server running at http://${hostname}:${port}/`);
