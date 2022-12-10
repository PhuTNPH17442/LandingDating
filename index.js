const express = require('express')
const handlebars= require('express-handlebars')
const path = require('path')
const app = express()
const POST = process.env.POST||4000
app.engine('hbs', handlebars.engine({
    extname:'.hbs'
  }))
app.set('view engine', 'hbs')
app.set('views' , path.join(__dirname,'resource/views'));
app.get('/',(req,res)=>{
    res.render('home')
})


app.listen(POST,()=> console.log(`Sever running in `+POST)) 