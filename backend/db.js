const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const conn = mongoose.connection;

conn.on('error', (error) =>{
    console.error(error);
});

conn.once('connected', ()=> {
    console.log("DB connected!");
});

