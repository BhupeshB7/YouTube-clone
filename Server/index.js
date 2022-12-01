// import express, { response } from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRoutes from "./routes/users.js"
// import videoRoutes from "./routes/videos.js"
// import commentRoutes from "./routes/comments.js"
// import authRoutes from "./routes/auth.js"
// import cookieParser from "cookie-parser";
// const app = express();
// dotenv.config()

// const connect = () => {
//     mongoose.connect(process.env.MONGO).then(() => {
//         console.log("Connected to DB")
//     }).catch(err => {
//         throw err;
//     });
// };
// //mongodb+srv://youtube_clone:<password>@cluster0.2turryi.mongodb.net/?retryWrites=true&w=majority
// //45zMOULTYHiCfXwt
// //youtube_clone

// app.use(cookieParser())
// app.use(express.json())
// app.use("/api/auth", authRoutes)
// app.use("/api/users", userRoutes)
// app.use("/api/videos", videoRoutes)
// app.use("/api/comments", commentRoutes)

// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.status || "something went wrong";
//     return res.status(status).json({
//         success: false,
//         status,
//         message,
//     })
// })
// app.listen(5500, () => {
//     connect()
//     console.log("connected to server")
// })

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
// const cors = require('cors');


const app = express();
dotenv.config();

const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((err) => {
            throw err;
        });
};
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }
// app.use(cors(corsOptions));
// //middlewares
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

//error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

app.listen(5500, () => {
    connect();
    console.log("Connected to Server");
});