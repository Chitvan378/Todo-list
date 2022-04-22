const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

let items = [];
app.get("/",(req, res) => {
    let today = new Date();

    let options ={
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    let day = today.toLocaleString('en-US', options);
    res.render("index.ejs",{keyDay:day, newItem:items});
});

app.post("/", (req,res) =>{
    let todo = req.body.item;
    items.push(todo);

    res.redirect("/");
});
app.listen(3000, ()=>{
    console.log("Server setup at port 3000");
});

  