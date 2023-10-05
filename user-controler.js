import {user,user1} from "./user-schema.js";

export async function addTeacher(req,res){
    const user = req.body;
   const newUser = new user1(user);
   try {
    await newUser.save();
    res.status(201).json(user);
   } catch (error) {
    res.status(409).json(error.message);
   }
}

export async function getByName(req,res){
    console.log(req.query.name);
   
   try {
    const response = await user1.find({"username":req.query.name});
    res.status(201).json(response);
   } catch (error) {
    res.status(409).json(error.message);
   }
}

export async function loginUser(req, res) {
    const { username,password } = req.body;
    // console.log(req.body);
    // Validation: Check if the request contains a username
    if (!username) {
        return res.status(400).json({ message: "Username is required" });
    }

    try {
        const Ruser = await user.findOne({ "username":username });

        // Check if the user exists
        if (!Ruser) {
            return res.status(404).json({ message: "User not found" });
        }
        if (Ruser.username == username && Ruser.password == password) {
            res.status(200).json(Ruser);
        }
        else{
            return res.status(404).json({ message: "Username or password incorrect" });
        }

        // You can send the user data here or customize the response as needed
        
    } catch (error) {
        // Handle unexpected server errors
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}