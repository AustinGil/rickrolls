const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("yo");
});

const port = 3000;
app.listen(port, () => console.log(`App running at http://localhost:${port}!`));
