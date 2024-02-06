import mongoose from "mongoose";

const approvalsSchema = mongoose.Schema({
    title: String,
    description: String,
    people: [{ id: mongoose.Schema.Types.ObjectId }],
    status: { type: Number, enum: [0, 1, 2] }
});

export const ApprovalsModel = mongoose.model('Approvals', approvalsSchema);
