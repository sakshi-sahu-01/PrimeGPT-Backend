import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["user", "assistant"],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
        
    }
})

const threadSchema = new mongoose.Schema({
    threadId : {
        type: String,
        require: true,
        unique: true
    },
    title : {
        type: String,
        default: "New Chat"
    },
    messages: [messageSchema],
    createdAt: {
        type: Date,
        default: Date.now
        
    },
    updatedAt: {
        type: Date,
        default: Date.now
        
    }
})

export default mongoose.model("Thread", threadSchema);