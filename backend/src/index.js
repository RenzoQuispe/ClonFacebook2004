import express from 'express';
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

import { connectDB } from './lib/db.js';
import cookieParser from "cookie-parser";
import cors from "cors";
//import { app, server } from "./lib/socket.js";
//import path from "path";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json({ limit: '50mb' })); //Aumenta el límite del body a 50MB
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
/*
// Servir el frontend en producción cuando la aplicación está en un entorno de despliegue (production).
// En la etapa de desarrollo, en el archivo .env, estaba NODE_ENV=development
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
*/
app.listen(PORT, () => {
    console.log("Server ejecutandose en el puerto:" + PORT);
    connectDB();
});