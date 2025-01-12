import express from "express"
import jwt from "jsonwebtoken"
import cors from "cors"
import bodyParser from "body-parser";
const app = express();
const JWT_SECRET = "s3r3t"
app.use(express())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
const users = [
    {
        email : "admin123@gmail.com",
        password : "password@123"
    }
]
app.post('/signup',(req,res)=>{
    const {email,password} = req.body;
    const user = users.find((user)=>user.email===email);
    const passwordCheck = users.find((user)=>user.password===password);
    if(!user || !passwordCheck){
        res.status(403).json({
            message : "user not found"
        })
        return;
    }else{
        res.json({
            message : "user found."
        })
    }
})
app.post('/signin',(req,res)=>{
    console.log(req.body);
    const {email,password} = req.body;
    const user = users.find((user)=>user.email===email);
    const passwordCheck = users.find((user)=>user.password===password);
    if(!user || !passwordCheck){
        res.status(403).json({
            message : "user not found"
        })
        return;
    }
    const token = jwt.sign({
        email : user.email
    },JWT_SECRET);
    res.json({
        message : "user signed in",
        token : token
    });
})
app.listen(3000,()=>{
    console.log('server up at port 3000');
})