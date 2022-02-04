const http = require("http");
const server = http.createServer();

server.on("request", (res) => {
  res.end("Welcome");
});

server.listen(5500);
