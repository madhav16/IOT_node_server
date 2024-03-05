import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    title: String,
    description: String,
    event_date: Date,
    target_type: String ,
    team: [{ type: String }], // Storing team names directly
    department: [{ type: String }], // Storing department names directly
    cover_image: String,
    event_manager: String
});

export const Event = mongoose.model('Event', eventSchema);

