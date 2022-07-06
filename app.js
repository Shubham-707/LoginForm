const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/form/index.html');
});

app.listen(3000,()=>{
    console.log(`server is listening to port 3000`);
});
