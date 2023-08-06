const express = require("express");
const db = require("./config/config.js");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //These format the data to be read by the server, if we didnt have this req.body and req.params would be undefined
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`https://localhost:${PORT}`);
  });
});