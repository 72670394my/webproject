const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const port =process.env.PORT || 8000;
const staticPath=path.join(__dirname,'../public');
const templetePath=path.join(__dirname,"../tempalets/views");
partialPath=path.join(__dirname,'../tempalets/partials');
// console.log(staticPath);
;
app.set('views',templetePath);
app.set('view engine','hbs');
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));


app.get('/',(req,res)=>{
    res.render('index.hbs');
});
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render("404",{
        errmsg:"oops page not found"
    });
})

app.listen(port,()=>{
    console.log("server started");
})