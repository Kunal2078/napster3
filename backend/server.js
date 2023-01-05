if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const mongoose= require('mongoose')
// const mongoose2= require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
// mongoose2.connect(process.env.DATABASE_URL2)

// .then( ()=>{
//     console.log('conneted')
// })
// .catch((e)=>{ 
//     console.log(e)
// })

const db =mongoose.connection
// const db2 =mongoose2.connection

db.on('error',error => console.error(error))
db.once('open',() => console.log('connected to moongose')) 
// db2.once('open',() => console.log('connected to moongose')) 
const User = require('./models/user')
const Data = require('./models/data')

const ejs=require('ejs')
const express= require('express');
const app =express();
var path = require('path')
var engine = require('consolidate');
const bcrypt=require('bcrypt')
const passport=require('passport')
const flash =require('express-flash')
const session =require('express-session')
const initializepassport =require('./passport-config');
 const methodOverride=require('method-override')
const cors =require('cors')
initializepassport(
    passport,
    email =>users.find(user => user,email ===email),
    id =>users.find(user => user,id ===id)
    )

// console.log(users)
// const usersdata=db.find({})
app.use(
    cors({ 
        origin:"*"
    })
)
app.use(express.static('public'))
app.use('/css',express.static(__dirname +'public/css'))
app.use('/js',express.static(__dirname +'public/js'))
app.use('/img',express.static(__dirname +'public/img'))
app.use('/modules',express.static(__dirname +'public/modules'))
// app.use('./../',express.static(__dirname +'frontend'))
app.set('views', __dirname + '/views')
app.engine('html', engine.mustache)
app.set('view engine', 'html')
app.set('view engine',ejs)
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialised: false

}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get("/admin",(req,res)=>{
    res.render('admin/index.html')
})
app.get("/sign-up",(req,res)=>{
    res.render('pages/signUp/index.html')
    
})
app.get("/Home",(req,res)=>{
    res.render('index.html')
    
})
app.get('/collection',async(req,res)=>
{
    // const data= db.datas
    const data1= await Data.find({})
   
   
   return res.json(data1)
})

app.get("/movie",async (req, res) => {
    const data1= await Data.find({})
    let response = data1.find((item) => item.id == req.query.id);
    console.log(response)
    if (response)
     return res.json(response);
    else
      return res.status(400).send({
        message: `Adventure details not found for ${req.query.adventure}!`,
      });
  });

app.post('/admin',async(req,res)=>{
    try{
  var newData = new Data({
      id:Date.now().toString(),
      Imageurl:req.body.image,
      name:req.body.movieName,
      trailerUrl:req.body.trailer,
      bio:req.body.Description,
      movieUrl:req.body.movieUrl,
      category:req.body.category,
      director:req.body.director,
      cast:req.body.cast,
      writer:req.body.writer,
      movieAbout:req.body.movieAbout,
      rating:req.body.rating,

      

  })
  console.log('data successfully created !')
  console.log("data: " + newData)
  newData.save().then(()=> console.log('newDatasaved successfully'))
  
  res.redirect('/admin')
    }
    catch (e) {
      console.log(e.message)
  }


  })


app.post('/sign-up',async(req,res)=>{
  try{
const hashedpassword= req.body.password
var newUser = new User({
    id:Date.now().toString(),
    email:req.body.email,
    password:hashedpassword
})
console.log('newUser successfully created !')
console.log("newuser: " + newUser)
newUser.save().then(()=> console.log('newUser saved successfully')).catch(e=> console.log(e))

res.redirect('/sign-in')
  }
  catch (e) {
      res.redirect('/sign-up')
    console.log(e)
    
}
// db.collection("user-data").insertOne(users[0])


//   console.log(users[0])
})
app.get("/browse",(req,res)=>{
    res.render('pages/browse/index.html')
    
})
app.get("/Movies",(req,res)=>{
    res.render('pages/Movies/index.html')
    
})
app.get("/New&Popular",(req,res)=>{
    res.render('pages/New&Popular/index.html')
    
})
app.get("/watch",(req,res)=>{
    res.render('pages/watch/index.html')
    
})
app.get("/sign-in",(req,res)=>{
    res.render('pages/signIn/index.html')
   
})
app.post('/sign-in',async(req,res)=>{
    try {
        const userData = await User.findOne({email: req.body.email})
        if( !userData ){
            return res.status(404).json({message:"Invalid email"})
        }
        else if(userData.password != req.body.password){
            return res.status(404).json(({ message: "Invalid Password"}))
        }
        const data = { email: req.body.email, password: req.body.password}
        return res.redirect('/browse')
          
  
    } catch (error) {
        // res.render('/sing-in')
        console.log(error)
    }
  
})
// app.post('/sign-in',checkNotAuthenticated,passport.authenticate('local',{
//     successRedirect:'/Untitled-1',
//     failureRedirect:'/sign-in',
//     failureFlash: true
// }))



app.delete('/logout',(req,res)=>
{
    req.logOut
    res.redirect("/sign-in")
})

function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/sign-in')
}
function checkNotAuthenticated(req,res,next){
    if(req.isAuthenticated()){
      return  res.redirect('/')
    }
    next()
}  
app.listen(process.env.PORT || 8082)  
