import express from "express";
import 'dotenv/config';
import cors from "cors";
import fetch from "node-fetch";
import { GoogleGenAI } from "@google/genai";
import mongoose from "mongoose";
import chatRoutes from "./Routes/chat.js";



const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use("/api", chatRoutes);


app.listen(PORT, ()=>{
  console.log(`server running on ${PORT}`);
  connectDB();
})

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected with Database!");
    } catch(err) {
        console.log("Failed to connect with Db", err);
    }
}


// app.post("/test", async (req, res) => {
//   const apiKey = process.env.GEMINI_API_KEY;

//   const body = {
//     model: "gemini-2.0-flash",
//     contents: [
//       {
//         parts: [
//           {
//             text: "Write about ai?"
//           }
//         ]
//       }
//     ]
//   };

//   try {
//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(body)
//       }
//     );

//     const data = await response.json();
//     console.log(data);
//     res.send(data);
//   } catch (err) {
//     console.error("Fetch error:", err);
//     res.status(500).send("Error connecting to Gemini API");
//   }
// });