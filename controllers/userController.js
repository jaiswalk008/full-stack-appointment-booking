const Users = require('../models/users');

exports.getAdduser =async (req,res) =>{
    try{
        const users = await Users.findAll();
        res.json(users);
    }catch(err){console.log(err)};
}
exports.postAddUser = async (req,res)=>{
    try{
        const user =await Users.create({...req.body});
        res.json(user);
    }catch(err){console.log(err)};
    
}
exports.getEdituser = async (req,res)=>{
    const userId = req.params.userId;
    try{
        const user =await Users.findByPk(userId)
        res.json(user);
    }catch(err){console.log(err)};
}

exports.deleteUser =async (req,res)=>{
    const userId = req.params.userId;
    try{
        const user = await Users.findByPk(userId)
        await user.destroy();
        res.sendStatus(200);
    }catch(err){console.log(err)};
    

}