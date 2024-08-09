const express = require("express");
const app = express();
const path = require("path");

let port = 3000;
let naams = [];

app.use(express.json());
app.use(express.urlencoded({ extendet: true }));


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("index.ejs", {name: naams});
    
});

app.post("/", (req, res) => {
    const naam = req.body.naam;
    naams.push(naam);
    res.redirect("/")
    
});



app.listen(port, () => {
    console.log("server run successesfully in http://localhost:" + port);
});