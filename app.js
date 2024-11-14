// app.js

const express = require('express');
const app = express();
const port = 3000;

const ejsmate = require("ejs-mate");
app.engine("ejs",ejsmate);
//ejs path setiing
const path = require('path');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static('public'));

// Middleware to parse JSON data
app.use(express.json());


// Define basic routes
app.get('/', (req, res) => {
    res.render('listings/index.ejs');
});
app.get("/add",(req,res)=>
{
  res.render("add.ejs");
})
app.get("/dashboard",(req,res)=>
{
  res.render("dashboard.ejs")
})
app.get("/login",(req,res)=>
{
    res.render("users/login.ejs");
})

app.get("/signup",(req,res)=>
{
    res.render("users/signup.ejs");
})

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
