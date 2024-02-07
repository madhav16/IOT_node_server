import mongoose from "mongoose";

const approvalsSchema = mongoose.Schema({
    subject: String,
    description: String,
    people: [{ 
        id: mongoose.Schema.Types.ObjectId,
        order_sequence: Number  // Including order_sequence in the people array
    }],
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected', 'Cancelled'], default: 'Pending' }, // Corrected spelling and capitalization, added default value
    priority: { type: String, enum: ['Low', 'Medium', 'High'] } // Corrected capitalization of enum values
});

export const ApprovalsModel = mongoose.model('Approvals', approvalsSchema);
