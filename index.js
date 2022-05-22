const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(process.env.PORT || 5500, (_) =>
  console.log(`Server running at port ${process.env.PORT || 5500}`)
);
