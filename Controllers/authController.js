const User = require('../Model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register=async(req,res)=>{
    try{

        const {username , password , role}= req.body;
        console.log('Registering user with role:', role); 
        const hasedPass = await bcrypt.hash(password , 10);
   
        const newUser = new User({
           username , 
           password : hasedPass , 
           role
        })
        await newUser.save();
        res.status(200).json({message : "User created successfully",newUser})
    }catch(err){
        res.status(400).json({message : err.message});
    }
}

exports.login=async(req,res)=>{
    try{
        const {username , password}= req.body;

        
        const user = await User.findOne({username});
        console.log(user.role);

        if(!user){
            return res.status(404).json({message : "user Not Found"})
        }

        const ismatch = await bcrypt.compare(password , user.password);
        if(!ismatch){
            return res.status(400).json({message : "Invalid Password"});
        }

        const token = jwt.sign(
            {id:user._id , role:user.role},
            'secretKey',
            {expiresIn : "1h"}
        );
        res.status(200).json({token , user})

    }catch(err){
        res.status(400).json({message : err.message});
    }
}