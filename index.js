const express = require('express');
const app= express();
const session = require('express-session');
const MongoStore = require('connect-mongo').default;


app.use(session({
      secret : "mysecertkey",
      resave: false,
      saveUninitialized: false,
      store:MongoStore.create({mongoUrl:'mongodb://127.0.0.1:27017/sessiondb',
      collectionName: "sessionCollection"
      }),
     
      cookie : {maxAge: 1000*60*60*24}
})) 

app.get("/", (req,res)=>{
             if(req.session.username){
               res.send(`the username is is ${req.session.username} `);
         }else{
                  res.send("no username is here in session");
         }
})

// initalize session/
app.get("/setUsername", (req,res)=>{
         req.session.username="swarajj";
         res.send('<h1>session is get made</h1>')
})


app.get("/getUsername", (req,res)=>{
         if(req.session.username){
               res.send(`the username is is ${req.session.username} `);
         }else{
                  res.send("no username is here in session");
         }
})

app.get("/jetUsername", (req,res)=>{
         if(req.session.username){
               res.send(`the username is is ${req.session.username} `);
         }else{
                  res.send("no username is here in session");
         }
}) 



app.get("/destroy", (req,res)=>{
      req.session.destroy((err)=>{
            if(err){
                  res.status(500).send("falied to distroy session");
            }
            res.send("session get destroid");
      }) 
}) 








// start server//
app.listen(3000,()=>{
         console.log("started at 3000");
})
