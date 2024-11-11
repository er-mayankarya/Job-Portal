import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jtw from 'jsonwebtoken';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true ,
    } ,
    
    email : {
        type : String ,
        required : true ,
        validate : [validator.isEmail , "Please provide a Valid Email"]
    } ,

    phone : {} ,
    address : {} ,
    niches : {} ,
    password : {} ,
    role : {} ,
    resume : {} ,
    coverLetter : {} ,
    createdAt : {}
})