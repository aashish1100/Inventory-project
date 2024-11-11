// app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());


// Define basic routes
app.get('/', (req, res) => {
  res.send('Welcome to the Inventory System');
});

app.get("/login",(req,res)=>
{
    res.send("login page");
})

app.get("/singup",(req,res)=>
{
    res.send("singup page");
})

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
