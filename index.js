const express = require('express')
const app = express()

//http://localhost:3000/
app.get('/',(rep,res)=>{
    res.send('Home Page')
})
//http://localhost:3000/about
app.get('/about',(rep,res)=> {
    res.send('About Page1')
})

const port = 3000
app.listen(port,function (){   
    console.log(`Server running at http://localhost:${port}`);
});