import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
{
    fullName:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    phone:{
        type:String,
        required:true,
    },

    age:{
        type:Number,
        required:true,
    },

    gender:{
        type:String,
        required:true,
    },

    membership:{
        type:String,
        required:true,
    },

    emergencyContact:{
        type:String,
        required:true,
    },

    medicalConditions:{
        type:String,
        default:"None",
    }

},
{
    timestamps:true,
}
);

export default mongoose.model("Member",memberSchema);