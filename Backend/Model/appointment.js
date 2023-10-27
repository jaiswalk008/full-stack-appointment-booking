const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name:{
        type:String,
        allowNull:false
    },
    email:{
        type:String,
        allowNull:false
    },
    phone:{
        type:BigInt,
        allowNull:false
    }


})
export default mongoose.model(appointmentSchema,'appointment');