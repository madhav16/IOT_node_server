import { ApprovalsModel } from "./approvals-schema.js";
import { Event } from "./eventsModule.js";

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


 // Controller function to create a new event
export const createEvent = async (req, res) => {
  const { title, description, event_date, target_type, team, department, event_manager } = req.body;

  try {
      // Select a random cover image URL from the array
      const coverImages = [
          "https://images.unsplash.com/photo-1707173513949-da36b73461ad?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1707152567175-f840e5b4232c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1701369518365-5c61925a3f7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1705931607938-fa3b30611e15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D",
          "https://images.unsplash.com/photo-1707197066378-36583db5e892?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1707139057009-dd16280fa07f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fHw%3D",
          "https://images.unsplash.com/photo-1707145301260-8d5c3dc9f015?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ];

      const randomIndex = Math.floor(Math.random() * coverImages.length);
      const coverImage = coverImages[randomIndex];

      // Create a new entry with provided data
      const newEventData = new Event({ 
          title, 
          description, 
          event_date, 
          target_type, 
          team, 
          department, 
          cover_image: coverImage, // Assign the randomly selected cover image URL
          event_manager 
      });

      await newEventData.save();

      // Send a success response
      res.status(201).json({ message: "Event added successfully", data: newEventData });
  } catch (error) {
      // Handle any errors
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
  }
};


// Controller function to get all events
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find(); // Find all events in the database
        res.status(200).json(events); // Respond with the list of events
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
};

 