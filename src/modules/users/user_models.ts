import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    age: {
        type: Number,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type: String,
        required: false
    }
});

export interface IUser{
    _id?: string;
    name : string;
    age : number;
    email : string;
    password: string;

}

const User = mongoose.model('User', userSchema);
export default User;
