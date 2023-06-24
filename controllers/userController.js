const Users = require('../models/users');

exports.getAdduser = (req,res) =>{
    Users.findAll()
    .then(users=>{
        res.json(users);
    }).catch(err=> console.log(err))
}
exports.postAddUser = (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    Users.create({
        name:name,
        email:email,
        phone:phone
    })
    .then(()=> console.log('user added'))
    .catch((err)=> console.log(err));
}
exports.getEdituser = (req,res)=>{
    
}
exports.postEditUser = (req,res)=>{
    
}
exports.deleteUser = (req,res)=>{
    
}