import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {
    verAmigos, 
    buscarAmigoPorEmail,
    buscarAmigoPorUsername, 
    agregarAmigo, 
    aceptarSolicitud, 
    eliminarSolicitud, 
    verSolicitudes, 
    eliminarAmigo, 
    bloquearUser, 
    perfilUser,
    obtenerEstadoAmistad
} from "../controllers/friendship.controllers.js";

const router = express.Router();
router.get("/listaamigos", protectRoute, verAmigos);
router.post("/agregarAmigo", protectRoute, agregarAmigo);
router.put("/aceptarsolicitud", protectRoute,aceptarSolicitud)
router.delete("/eliminarsolicitud", protectRoute,eliminarSolicitud)
router.get("/versolicitudes", protectRoute,verSolicitudes)
router.delete("/eliminaramigo", protectRoute,eliminarAmigo)
router.get("/buscarAmigoPorEmail", protectRoute,buscarAmigoPorEmail)
router.get("/buscarAmigoPorUsername", protectRoute,buscarAmigoPorUsername)
router.post("/bloquearuser",protectRoute,bloquearUser)
router.get("/perfilUser/:id",protectRoute,perfilUser)
router.get("/estadoAmistad/:user1/:user2", protectRoute,obtenerEstadoAmistad);
export default router;