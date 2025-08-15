// import 'dotenv/config';


// const getApiResponse  = async(message) =>{
//     const apiKey = process.env.GEMINI_API_KEY;
    
//       const body = {
//         model: "gemini-2.0-flash",
//         contents: [
//           {
//             parts: [
//               {
//                 text: message
//               }
//             ]
//           }
//         ]
//       };
    
//       try {
//         const response = await fetch(
//           `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(body)
//           }
//         );
    
//         const data = await response.json();
//         const messageTaxt = data.candidates?.[0]?.content?.parts?.[0]?.text || "No Response";
//         console.log(messageTaxt );
//         return messageTaxt ;
//       } catch (err) {
//         console.error("Fetch error:", err);
//         res.status(500).send("Error connecting to Gemini API");
//       }
// }
// export default getApiResponse;
import 'dotenv/config';


const getApiResponse  = async(message) =>{
    const apiKey = process.env.GEMINI_API_KEY;
    
      const body = {
        model: "gemini-2.0-flash",
        contents: [
          {
            parts: [
              {
                text: message
              }
            ]
          }
        ]
      };
    
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
          }
        );
    
        const data = await response.json();
        const messageTaxt = data.candidates?.[0]?.content?.parts?.[0]?.text || "No Response";
        console.log(messageTaxt );
        return messageTaxt ;
      } catch (err) {
        console.error("Fetch error:", err);
        res.status(500).send("Error connecting to Gemini API");
      }
}
export default getApiResponse;