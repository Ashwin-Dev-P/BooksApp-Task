const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//To serve templates
const path = require('path');

app.use(express.static('static'))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")


//APIS
const apis = require("./routes/index");
app.use(apis);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on  port ${PORT}`);
});