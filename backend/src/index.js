import express from 'express';
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import friendshipRoutes from './routes/friendship.routes.js';

import { connectDB } from './lib/db.js';
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json({ limit: '50mb' })); //Aumenta el límite del body a 50MB
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
// CORS para red local
const corsOptions = {
  origin: function (origin, callback) {

    if (!origin) return callback(null, true);

    if (origin.startsWith("http://localhost:5173")) return callback(null, true);

    const regexRedLocal = /^http:\/\/192\.168\.1\.\d{1,3}:5173$/;

    if (regexRedLocal.test(origin)) return callback(null, true);

    return callback(new Error("CORS no permitido desde este origen: " + origin));

  },
  credentials: true
};

app.use(cors(corsOptions));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/friendship",friendshipRoutes);

app.listen(PORT, () => {
    console.log("Server ejecutandose en el puerto:" + PORT);
    connectDB();
});