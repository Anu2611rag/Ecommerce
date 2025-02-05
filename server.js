const express=require('express')
const app=express();
const mongoose=require('mongoose');
require('dotenv').config()
const cookieParser=require('cookie-parser')
const PORT=process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.json({msg:"thisn is Example"})
})
 // This is necessary to parse JSON in the request body

app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`)
})

//routes
app.use('/user',require('./routes/useRouter'))
app.use('/api',require('./routes/categoryRouter'))
//connect MOngodb
const URI=process.env.MONGODB_URL;
console.log("MongoDB URL:", process.env.MONGODB_URL); 


mongoose.connect(URI).then(()=>{
    console.log(" MongoDB Connected")
}).catch(err=>{
    console.log(err)
})
// Enable mongoose debugging

