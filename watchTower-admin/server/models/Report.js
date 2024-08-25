import mongoose from "mongoose";
const { Schema } = mongoose;
const ReportSchema = new mongoose.Schema(
    {
        reporterId: {
            type: Schema.Types.ObjectId,
            ref: 'Citizen', // Reference to Citizen collection
            required: true
        },
        location: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        disasterType: {
            type: String,
            enum: [
                "Fire", 
                "Flood", 
                "Landslide", 
                "Typhoon", 
                "Heatwave", 
                "Other"
            ],
            required: true
        },
        disasterTitle: {
            type: String,
            trim: true,
            min: 3,
            max: 100,
            // Title is optional for all disaster types
        },
        description: {
            type: String,
            required: true,
            min: 5,
        },
        disasterStatus: [{
            status: {
                type: String,
                enum: ["Pending", "In Progress", "Solved", "Failed", "Acknowledged", "Under Review"],
                default: "Pending"
            },
            updatedAt: {
                type: Date,
                default: Date.now
            }
        }],
        rescuerId: {
            type: Schema.Types.ObjectId,
            ref: 'Rescuer', // Reference to Rescuer collection
            required: false
        },
    },
    { timestamps: true }
);


const Report = mongoose.model("Report", ReportSchema);
export default Report;