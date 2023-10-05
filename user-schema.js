import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:String,
    password:String,
})
const teacherSchema = mongoose.Schema({
    subname:String,
    time:String,
    username:String,

})

export const user = mongoose.model('login', userSchema);

export const user1 = mongoose.model('teacher',teacherSchema);

