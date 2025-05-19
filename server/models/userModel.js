const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
  
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default:0,
    },
    cart:{
        type:Array,
        default:[],
    }
},{
timestamps:true
}
)
module.exports=mongoose.model('Users',userSchema)