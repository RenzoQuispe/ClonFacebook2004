import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { toast } from "react-hot-toast"

const ESTADOS_AMISTAD = {
    NONE: "none",
    PENDING: "pending",
    CONFIRMED: "confirmed",
    BLOCKED: "blocked"
};

export const estadoFriendship = create((set, get) => (
    {
        amigos: [],
        amigosEncontrados: [],  // Para almacenar los resultados de búsqueda
        isAmigosLoading: false,
        isSearchingFriend: false,
        estados: {}, // mapa: "userId-otroId": estado
        friendshipIds: {},

        getAmigos: async () => {
            set({ isAmigosLoading: true });
            try {
                const res = await axiosInstance.get("/friendship/listaamigos");
                if (Array.isArray(res.data.amigos)) {
                    set({
                        amigos: res.data.amigos.map(amigo => ({
                            _id: amigo._id,  // Renombramos _id a id
                            username: amigo.username,  // Usamos email como username si no hay otro identificador
                            email: amigo.email,
                            fotoPerfil: amigo.fotoPerfil,
                        })),
                        loading: false
                    });
                } else {
                    throw new Error("Estructura de datos inesperada");
                }
            } catch (error) {
                toast.error(error.response.data.message);
            }
        },
        buscarAmigoPorUsername: async (username) => {
            if (!username) return toast.error("El campo de búsqueda está vacío");

            set({ isSearchingFriend: true });
            try {
                const res = await axiosInstance.get("/friendship/buscarAmigoPorUsername", {
                    params: { username }  // Enviar como parámetro en la URL
                });
                set({
                    amigosEncontrados: res.data,
                    isSearchingFriend: false
                });
            } catch (error) {
                toast.error(error.response?.data?.message || "Error al buscar amigos por username");
                set({ isSearchingFriend: false });
            }
        },

        buscarAmigoPorEmail: async (email) => {
            if (!email) return toast.error("El campo de búsqueda está vacío");

            set({ isSearchingFriend: true });
            try {
                const res = await axiosInstance.get("/friendship/buscarAmigoPorEmail", {
                    params: { email }  // Enviar como parámetro en la URL
                });
                set({
                    amigosEncontrados: res.data,
                    isSearchingFriend: false
                });
            } catch (error) {
                toast.error(error.response?.data?.message || "Error al buscar amigos por email");
                set({ isSearchingFriend: false });
            }
        },
        estadoAmistad: async (id1, id2) => {
            const key = [id1, id2].sort().join("-");
            try {
                const res = await axios.get(`/estadoAmistad/${id1}/${id2}`);
                const { status, friendshipId } = res.data;

                set((state) => ({
                    estados: { ...state.estados, [key]: status || "none" },
                    friendshipIds: { ...state.friendshipIds, [key]: friendshipId || null }
                }));

                return status || "none";
            } catch (err) {
                console.error("Error al consultar estado de amistad", err);
                return "none";
            }
        }

    }
)
);
