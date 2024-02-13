import mongoose from "mongoose";

const approvalsSchema = mongoose.Schema({
    subject: String,
    description: String,
    people: [{ 
        id: mongoose.Schema.Types.ObjectId,
        order_sequence: Number,
        people_status: { type: String, enum: ['Pending', 'Accepted', 'Rejected', 'Cancelled'], default: 'Pending' } // Added people_status field
    }],
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected', 'Cancelled'], default: 'Pending' },
    priority: { type: String, enum: ['Low', 'Medium', 'High'] }
});

export const ApprovalsModel = mongoose.model('Approvals', approvalsSchema);
