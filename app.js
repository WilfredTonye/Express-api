var express = require('express');
var app = express();
const PORT = 1000

app.get("/",(req,res)=> {
    res.send("Hello Express");
})

app.listen(PORT,()=>{
    console.log(`Open your browser on http://localhost:${PORT}.......`)
})