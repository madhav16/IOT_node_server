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
    const { subject, description, people, priority } = req.body;

    try {
        // Create a new entry with provided data
        const newApprovalsData = new ApprovalsModel({ subject, description, people, priority }); // Set status to 'pending' by default
        await newApprovalsData.save();

        // Send a success response
        res.status(201).json({ message: "Approvals data added successfully", data: newApprovalsData });
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getByApprovalsId(req, res) {
    try {
      const id = req.query.id; // Retrieve ID from URL params
      console.log(req.query.id);
      // Validate ID format (optional)
      
  
      // Find the approval with the specified ID
      const approval = await ApprovalsModel.findById(id);
  
      if (!approval) {
        return res.status(404).json({ message: "Approval not found" });
      }
  
      // Send a success response with the retrieved data
      res.status(200).json(approval);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
 