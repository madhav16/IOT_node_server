import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String
});

export const UserModel = mongoose.model('User', userSchema);
