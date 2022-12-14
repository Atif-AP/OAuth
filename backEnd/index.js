const express = require('express')
const app = express()
const port = 8080;
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userModel = require("./model");
const cors = require('cors');
app.use(cors({
    origin: "*"}));
app.use(express.json());


//DB CONNECTION
mongoose
  .connect(
    "mongodb+srv://atifk:test123@cluster0.o5wples.mongodb.net/test"
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));


  //HIER WORDT VIA API HET SCHEMA AANGEROEPEN EN GESAVED
app.post("/add_user", (request, response) => {
  const user = new userModel({
    name: request.body.name

  });
  user.save();
  console.log("done");
});

// IRRELEVANT WAS VOOR TE TESTEN
app.post('/post', (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;