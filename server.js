// import express from "express";
// import 'dotenv/config';
// import cors from "cors";
// import fetch from "node-fetch";
// import { GoogleGenAI } from "@google/genai";
// import mongoose from "mongoose";
// import chatRoutes from "./routes/chat.js";





// const app = express();
// const PORT = 8080;

// app.use(express.json());
// app.use(cors());
// app.use("/api", chatRoutes);


// app.listen(PORT, ()=>{
//   console.log(`server running on ${PORT}`);
//   connectDB();
// })

// const connectDB = async() => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL);
//         console.log("Connected with Database!");
//     } catch(err) {
//         console.log("Failed to connect with Db", err);
//     }
// }


// // app.post("/test", async (req, res) => {
// //   const apiKey = process.env.GEMINI_API_KEY;

// //   const body = {
// //     model: "gemini-2.0-flash",
// //     contents: [
// //       {
// //         parts: [
// //           {
// //             text: "Write about ai?"
// //           }
// //         ]
// //       }
// //     ]
// //   };

// //   try {
// //     const response = await fetch(
// //       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
// //       {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json"
// //         },
// //         body: JSON.stringify(body)
// //       }
// //     );

// //     const data = await response.json();
// //     console.log(data);
// //     res.send(data);
// //   } catch (err) {
// //     console.error("Fetch error:", err);
// //     res.status(500).send("Error connecting to Gemini API");
// //   }
// // });
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Thread route (returns object)
app.post("/api/thread", (req, res) => {
  res.json({ threadId: Date.now().toString() });
});

// ✅ Chat route (always return an array, since frontend uses .map)
app.post("/api/chat", (req, res) => {
  const { message, threadId } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  // Example static response
  res.json([
    { role: "user", content: message },
    { role: "assistant", content: "This is a dummy reply from backend." }
  ]);
});
// ✅ Error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log);

