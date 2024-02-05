const User= require('../models/User');

const getAllUsers = (req,res)=>{
    User.find({}).then((result)=>{
        res.json({message:result})
    }).catch((err)=>{
        res.json({message:err})
    });

}

const createUsers = (req,res)=>{
    const {firstName, lastName, uidaiNo}=req.body
    console.log(req.body);
    const newUser = new User({
        firstName:"Test",
        lastName:"User",
        uidaiNo: 1234567890
    });
    newUser.save().then(()=>{
        res.json({message:"user created successfully"})
    }).catch(()=>{
        res.json({message:"error saving the data"})
    })
}

module.exports = {
    getAllUsers,
    createUsers
}