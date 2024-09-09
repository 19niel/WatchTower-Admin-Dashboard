import mongoose from "mongoose";
const { Schema } = mongoose;
const RescuerSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        username: {
            type: String,
            required: true,
            max: 100,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        email: {
            type: String,
            required: false,
            max: 100,
            unique: true,
        },
        mobileNumber: {
            type: Number,
            required: false,
            min: 11,
        },
        profileImage: {
            type: String, // Store Base64-encoded image as a string
            required: false, // Set to true if you want to make it mandatory
        },
        reportsTaken: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Report', // Assuming you have a Report model
        }],
        role: {
            type: String,
            default: "rescuer",
        },
        status: {
            type: String,
            enum: ["Active", "Inactive", "On a Mission"]
        }
    },
    { timestamps: true }
);

const Rescuer = mongoose.model('Rescuer', RescuerSchema);
export default Rescuer;Rescuer
