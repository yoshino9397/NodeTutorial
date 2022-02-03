const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our HP");
  }
  if (req.url === "/about") {
    res.end("Here is our story");
  }
  res.end(`
      <h1>Oops!</h1>
      <p>We can't connect to this URL</p>
      <a href="/">back home</a>
  `);
});

server.listen(5000);
