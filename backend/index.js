const express = require("express");
const PORT = 6000;
const app = express();

// app.use();
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.listen(PORT, () => {
  console.log("Server connected in port");
});
