const express = require('express');
const fest_route = require('./src/routes/fest');
const saree_route = require('./src/routes/saree');
const yoga_route = require('./src/routes/yoga');
const app = express();

const PORT = "8000";

app.get('/', (req, res)=>{
    return res.send("Hello World");
});

app.use('/fest', fest_route);
app.use('/saree', saree_route);
app.use('/yoga', yoga_route);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
});