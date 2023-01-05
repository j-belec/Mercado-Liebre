const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.listen(PORT, console.log("Servidor corriendo"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});
