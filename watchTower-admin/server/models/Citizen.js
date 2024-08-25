import mongoose from "mongoose";

const CitizenSchema = new mongoose.Schema(
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
            max: 100
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
        address: String,
        reports: Array,
        role: {
            type: String,
            enum: ["citizen", "rescuer", "admin"],
            default: "citizen"
        },
        
    },
    { timestamps: true}
);

const Citizen = mongoose.model("Citizen", CitizenSchema);
export default Citizen;