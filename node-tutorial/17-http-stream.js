var http = require("http");
var fs = require("fs");

http
  .createServer(function (res) {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
      ///ファイルを読み込みながらファイルに書き込み（pipe）
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
