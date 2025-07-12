import User from "../models/user.model.js";
import Friendship from "../models/friendship.model.js";

export const verAmigos = async (req, res) => {
    try {
        const userId = req.user._id; // Usuario autenticado

        const friendships = await Friendship.find({
            $or: [{ user1: userId }, { user2: userId }],
            status: "confirmed"
        }).populate("user1 user2", "username email fotoPerfil"); // Solo traer name y email

        if (!friendships.length) {
            return res.status(404).json({ message: "No tienes amigos agregados" });
        }

        // Formatear la lista de amigos para devolver solo los datos necesarios
        const amigos = friendships.map(friendship => {
            const amigo = friendship.user1._id.toString() === userId.toString() ? friendship.user2 : friendship.user1;
            return { _id: amigo._id, username: amigo.username, email: amigo.email, fotoPerfil: amigo.fotoPerfil };
        });

        res.json({ amigos });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener lista de amigos", error });
    }
}
export const buscarAmigoPorUsername = async (req, res) => {
    try {
        console.log("buscarAmigoPorUsername")
        const { username } = req.query;
        console.log(username);
        if (!username) {
            return res.status(400).json({ message: "El parámetro 'username' es requerido." });
        }

        const users = await User.find({
            username: { $regex: username, $options: "i" },
            _id: { $ne: req.user.id } // Excluir usuario logueado
        }).select("username email fotoPerfil");

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar amigos por username", error });
    }
};

export const buscarAmigoPorEmail = async (req, res) => {
    try {
        const { email } = req.query; // ← Aquí usamos req.query en lugar de req.body
        console.log(email);
        if (!email) {
            return res.status(400).json({ message: "El parámetro 'email' es requerido." });
        }

        const users = await User.find({
            email: { $regex: email, $options: "i" },
            _id: { $ne: req.user.id } // Excluir usuario logueado
        }).select("username email fotoPerfil");

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar amigos por email", error });
    }
};
export const agregarAmigo = async (req, res) => { //Enviar solicitud de amistad
    try {
        const { user1, user2 } = req.body;
        // Evitar solicitudes duplicadas
        const exists = await Friendship.findOne({ user1, user2 });
        if (exists) return res.status(400).json({ message: "Solicitud ya enviada" });

        const friendship = new Friendship({ user1, user2, status: "pending" });
        await friendship.save();

        res.status(201).json({ message: "Solicitud enviada" });
    } catch (error) {
        res.status(500).json({ message: "Error al enviar solicitud", error });
    }
}
export const aceptarSolicitud = async (req, res) => {
    try {
        //const friendshipId = req.solicitudes._id;
        const { friendshipId } = req.body;
        console.log(req.body);
        const friendship = await Friendship.findByIdAndUpdate(
            friendshipId,
            { status: "confirmed" },
            { new: true }
        );

        if (!friendship) return res.status(404).json({ message: "Solicitud no encontrada" });

        res.json({ message: "Solicitud aceptada", friendship });
    } catch (error) {
        res.status(500).json({ message: "Error al aceptar solicitud", error });
    }
}
export const eliminarSolicitud = async (req, res) => {
    try {
        //const friendshipId = req.friendship._id;
        const { friendshipId } = req.body;
        const deleted = await Friendship.findByIdAndDelete(friendshipId);
        if (!deleted) return res.status(404).json({ message: "Solicitud no encontrada" });
        res.json({ message: "Solicitud eliminada" });

    } catch (error) {
        res.status(500).json({ message: "Error al eliminar solicitud", error });
    }
}
export const verSolicitudes = async (req, res) => {
    try {
        const userId = req.user._id; // Usuario autenticado

        const solicitudes = await Friendship.find({
            user2: userId, // Usuario que recibe la solicitud
            status: "pending"
        }).populate("user1", "username email fotoPerfil"); // Obtener solo username y email del remitente

        if (!solicitudes.length) {
            return res.status(404).json({ message: "No tienes solicitudes pendientes" });
        }

        // Formatear la respuesta con solo los datos necesarios
        const listaSolicitudes = solicitudes.map(solicitud => ({
            _id: solicitud._id,
            userId: solicitud.user1._id,
            username: solicitud.user1.username,
            email: solicitud.user1.email,
            fotoPerfil: solicitud.user1.fotoPerfil
        }));

        res.json({ solicitudes: listaSolicitudes });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener solicitudes", error });
    }
}
export const eliminarAmigo = async (req, res) => {
    try {
        const { user1, user2 } = req.body;

        const deleted = await Friendship.findOneAndDelete({
            $or: [{ user1, user2 }, { user2: user1, user1: user2 }],
            status: "confirmed"
        });

        if (!deleted) return res.status(404).json({ message: "Amistad no encontrada" });
        res.json({ message: "Amistad eliminada" });

    } catch (error) {
        res.status(500).json({ message: "Error al eliminar amigo", error });
    }
}
export const bloquearUser = async (req, res) => {
    try {
        const { user1, user2 } = req.body;

        const updated = await Friendship.findOneAndUpdate(
            { $or: [{ user1, user2 }, { user2: user1, user1: user2 }] },
            { status: "blocked" },
            { new: true }
        );

        if (!updated) return res.status(404).json({ message: "No se encontró relación de amistad" });

        res.json({ message: "Usuario bloqueado", updated });
    } catch (error) {
        res.status(500).json({ message: "Error al bloquear usuario", error });
    }
}
export const obtenerEstadoAmistad = async (req, res) => {
    try {
      const { user1, user2 } = req.params;
  
      const amistad = await Friendship.findOne({
        $or: [
          { user1, user2 },
          { user1: user2, user2: user1 }
        ]
      });
  
      if (!amistad) return res.json({ status: null });
  
      return res.json({ status: amistad.status, friendshipId: amistad._id });
    } catch (error) {
      res.status(500).json({ message: "Error al obtener estado de amistad", error });
    }
}
export const perfilAmigo = async (req, res) => {
    try {
        const userId = req.user._id;
        //const { userId } = req.params;
        const user = await User.findById(userId).select("-password");
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener perfil", error });
    }
}