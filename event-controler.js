import {Event} from "./eventsModel.js"; // Make sure to include the file extension '.js'



// Controller function to create a new event
export const createEvent = async (req, res) => {
    try {
        const eventData = req.body; // Extract event data from request body
        const event = await Event.create(eventData); // Create event using Event model
        res.status(201).json(event); // Respond with the created event
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle errors
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

