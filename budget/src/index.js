//import dependences
const express = require("express");
const morgan = require("morgan");
const pool = require("./data/config");
const port = 3002;
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//routes 
app.use(require("./routes/data"));

//Start server
const server = app.listen(port, (error) =>{
    if(error){
        return console.log(`Error: ${error}`);
    }else{
        console.log(`Server listenig on port ${server.address().port}`);
    }
});

