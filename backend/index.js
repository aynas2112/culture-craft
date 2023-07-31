require('dotenv').config();
require('./db')
const express = require('express');
const cors = require('cors');
const auth = require('./src/middleware/auth');
const fest_route = require('./src/routes/fest');
const saree_route = require('./src/routes/saree');
const yoga_route = require('./src/routes/yoga');

const app = express();
const api_router = express.Router();

app.use(cors());
app.use(express.json())
app.use(auth);

const port = process.env.PORT;

app.get('/', (req, res)=>{
    return res.send("Hello World");
});

api_router.use('/fest', fest_route);
api_router.use('/saree', saree_route);
api_router.use('/yoga', yoga_route);

app.use("/api", api_router);

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});