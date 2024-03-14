var http = require("http");
const port = process.env.PORT || 3001;
// const hostname = process.env.HOSTNAME || "0.0.0.0";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(port);

console.log(`Server running at http://${hostname}:${port}/`);
