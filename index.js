const express = require('express');
const path = require('path');
const port = 1335;


constdb = require('./config/mongoose');
const Contact = require('./models/contact') ;

const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));



// Own middleware1
//app.use(function(req,res,next){
     //console.log("middleware 1 called");
//      req.myName="SaurabH";
//      next();
// });

// Middleware2
//app.use(function(req,res,next){
    //console.log("middleware 2 called");
    // console.log("My Name from Mw2",req.myName);
    //next();
//});


var contactList=[
    {
        name: "saurabh",
        phone:"8340265367"
    },
    {
        name: "Lnct",
        phone: "8340265367"

    }
]

// fetching data from database 

app.get('/',function(req,res){
     
    Contact.find({},function(err,contacts){
        if (err) {
          console.log("error in fetching contaacts from db");
          return; 
        }
        return res.render('home',{
            title:"Contact List",
           contact_list: contacts
         });
    });

});

app.get('/practice',function(req,res){
    return res.render('practice',{
            title: "Let us play with ejs"
    });
});





app.post('/create-contact',function(req,res){
   
//    contactList.push({
//         name: req.body.name,
//         phone: req.body.phone
//    });
  // contactList.push(req.body);

   // pusing into database
   Contact.create({
    name: req.body.name,
    phone: req.body.phone
   }, function(err,newContact){
     if(err){console.log('error in creating the contact:');
     return;}
     
     console.log('******',newContact);
     return res.redirect('back');
   });
    
});


  // For Deleting the contact

app.get('/delete-contact/',function(req,res){
      //get the id from query in the ul
      let id = req.query.id;

  // Find the contact in the database using id and delete it
    
 Contact.findByIdAndDelete(id,function(err){
    if(err){
        console.log('err in delecting an object from the database');
        return;
    }
    return res.redirect('back');
 });
    
});


// deleting contact from database by id code end here


app.listen(port, function(err){
 
    if(err){
        console.log('Error is running the server',err);
    }
    console.log('Yup Express server is running on port: ',port); 
});
 





