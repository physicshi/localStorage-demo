const express = require("express");
const port = 8001;

const app = express();

app.use(express.static("./demo1"));

app.listen(port, () => {
  console.log("路由服务器启动成功，端口号为" + port);
});
