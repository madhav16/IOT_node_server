import { user, user1 } from "./user-schema.js";

export async function addTeacher(req, res) {
    const user = req.body;
    const newUser = new user1(user);
    try {
        await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(409).json(error.message);
    }
}

export async function getByName(req, res) {
    console.log(req.query.name);

    try {
        const response = await user1.find({ "username": req.query.name });
        res.status(201).json(response);
    } catch (error) {
        res.status(409).json(error.message);
    }
}
export async function get(req, res) {
    // console.log(req.query.name);

    try {
        const response = await user1.find();
        res.status(201).json(response);
    } catch (error) {
        res.status(409).json(error.message);
    }
}

export async function getById(req, res) {
    console.log(req.query.id);

    try {
        const response = await user1.findById(req.query.id);
        res.status(201).json(response);
    } catch (error) {
        res.status(409).json(error.message);
    }
}
export async function getByPage(req, res) {
    const limit = parseInt(req.query.limit) || 10; // Parse limit from query string, default to 10 if not provided
    const pageNO = parseInt(req.query.page) || 1; // Parse page number from query string, default to 1 if not provided

    try {
        // Retrieve data from the database with pagination
        const totalCount = await user1.countDocuments(); // Get total count of documents
        const totalPages = Math.ceil(totalCount / limit); // Calculate total pages
        const hasMore = pageNO < totalPages; // Check if there are more pages beyond the current one

        const response = await user1.find().skip((pageNO - 1) * limit).limit(limit);

        res.status(200).json({ data: response, hasMore });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function updateById(req, res) {
    console.log(req.query.id);
    const id = req.query.id;
    const updatedData = req.body;
    // const newUser = new user1(updatedData);
    const options = { new: true };
    try {
        const result = await user1.findByIdAndUpdate(
            id, updatedData, options
        )
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json(error.message);
    }
}
export async function deleteSub(req, res) {
    const id = req.query.id;
    console.log(id);
    try {
        const response = await user1.deleteOne({ _id: id });
        res.status(200).json({ message: 'user deleted' });
    } catch (error) {
        res.status(409).json(error.message);
    }
}

export async function loginUser(req, res) {
    const { username, password } = req.body;
    // console.log(req.body);
    // Validation: Check if the request contains a username
    if (!username) {
        return res.status(400).json({ message: "Username is required" });
    }

    try {
        const Ruser = await user.findOne({ "username": username });

        // Check if the user exists
        if (!Ruser) {
            return res.status(404).json({ message: "User not found" });
        }
        if (Ruser.username == username && Ruser.password == password) {
            res.status(200).json(Ruser);
        }
        else {
            return res.status(404).json({ message: "Username or password incorrect" });
        }

        // You can send the user data here or customize the response as needed

    } catch (error) {
        // Handle unexpected server errors
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
