import { UserModel } from "./UserSchema.js";

// Controller function to create a new user
export async function createUser(req, res) {
    const { username } = req.body;

    try {
        const newUser = new UserModel({ username });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// Controller function to retrieve all users
export async function getAllUsers(req, res) {
    try {
        const allUsers = await UserModel.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
