import { ApprovalsModel } from "./approvals-schema.js";

export async function getAllApprovals(req, res) {
    try {
        // Retrieve all approvals records from the database
        const allApprovals = await ApprovalsModel.find();
        
        // Send a success response with the retrieved data
        res.status(200).json(allApprovals);
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}




export async function handleApprovalsOperation(req, res) {
    const { title, description, people, status } = req.body;

    try {
        // Create a new entry with provided data
        const newApprovalsData = new ApprovalsModel({ title, description, people, status });
        await newApprovalsData.save();

        // Send a success response
        res.status(201).json({ message: "Approvals data added successfully", data: newApprovalsData });
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}