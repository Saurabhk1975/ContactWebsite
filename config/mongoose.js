//require the library
const mongoose =require('mongoose');
// connect to database
mongoose.connect('mongodb://localhost/contact_lisst_db');
//acquire the connection (to check if it i succesfull)
const db = mongoose.connection;
//error
db.on('error',console.error.bind(console,'error connecting to db'));
//up and running then print the message

db.once('open',function(){
    console.log('successfully connected to database');
});