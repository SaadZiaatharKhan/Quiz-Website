const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname))

app.get("/", (req, res) => {
  console.log("Hey Its A Get Request");
  res.sendFile("quiz.html",{root:__dirname});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

