const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const IndexRoute = require("./Routes/index");
const Registration = require("./Routes/registrationRoute");
const LoginRoute = require("./Routes/loginRoute");
const SubjectRoute = require("./Routes/subjectRoute");
const UserStudyRoute = require("./Routes/userStudyRoute");

mongoose.Promise = global.Promise;
console.log("localhost");
url = `mongodb://localhost:27017/foxperry`;
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex:true}).then(async (db) => {
    console.log('Connected to MongoDB server',url);
})
.catch((error) => {
    console.log('could not connect to MongoDB server',url);
});

// instantiate Express
const app = express();

// use middleware to serve static files in express js
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());


app.use("/",IndexRoute);
app.use("/registration",Registration);
app.use("/login",LoginRoute);
app.use("/subject",SubjectRoute);
app.use("/user-study",UserStudyRoute);
app.use((req,res,next)=>{
    res.status(404).json({error:"File not found"});
})

let PORT=3000;
// Start Server 
app.listen(PORT,(error)=>{
    if(error){
        console.log(error);
    }
    console.log(`Server Started on  ${PORT} Port`);
});
