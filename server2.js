const express = require("express");
const port = 8002;

const app = express();

app.use(express.static("./demo2"));

app.listen(port, () => {
  console.log("路由服务器启动成功，端口号为" + port);
});
