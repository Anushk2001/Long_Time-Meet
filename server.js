const express = require('express');
const app = express();
const server = require('http').Server(app);
const {v4: uuidv4} = require('uuid'); // for unique meeting id
app.set('view engine' , 'ejs');   // IMP it connect meet.ejs 
app.use(express.static('public'));// give public excess to the url

app.get('/',(req,res)=>{
    // res.status(200).send("Hello!!!");
    // res.render('meet');
    res.redirect(`/${uuidv4()}`);
})

app.get('/:meet',(req,res)=>{
    res.render('meet',{meetID: req.params.meet});
})


server.listen(8001);



