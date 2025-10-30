import { estadoFriendship } from "../estados/estadoFriendship";
import { UserPlus, Ban, Check, Mail } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
const SubBotonAmistad = ({ authId, amigoId }) => {
    const key = [authId, amigoId].sort().join("-");
    const { estados, estadoAmistad, friendshipIds, enviarSolicitudAmistad } = estadoFriendship();
    const estado = estados[key] || "none";

    useEffect(() => {
        estadoAmistad(authId, amigoId);
    }, [authId, amigoId]);

    const handleClick = async (e) => {
        e.stopPropagation();

        switch (estado) {
            case "none":
                console.log("Enviar solicitud");
                const res = await enviarSolicitudAmistad(authId, amigoId);
                if (res.ok) {
                    toast.success("Solicitud enviada"); // si usas react-hot-toast o similar
                } else {
                    toast.error(res.message);
                }
                break;
            case "pending":
                console.log("Solicitud ya enviada");
                break;
            case "confirmed":
                console.log("Eliminar amigo");
                break;
            case "blocked":
                console.log("Desbloquear");
                break;
        }
    };

    const renderContenido = () => {
        switch (estado) {
            case "none":
                return (
                    <>
                        <UserPlus className="w-6 h-6 text-white" />
                        <span className="text-white text-lg">Añadir</span>
                    </>
                );
            case "pending":
                return (
                    <>
                        <Mail className="w-6 h-6 text-yellow-600" />
                        <span className="text-yellow-600 text-lg">Pendiente</span>
                    </>
                );
            case "confirmed":
                return (
                    <>
                        <Check className="w-6 h-6 text-green-600" />
                        <span className="text-green-600 text-lg">Amigos</span>
                    </>
                );
            case "blocked":
                return (
                    <>
                        <Ban className="w-6 h-6 text-red-600" />
                        <span className="text-red-600 text-lg">Bloqueado</span>
                    </>
                );
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{ fontFamily: '"Lucida Grande", Tahoma, Verdana, Arial, sans-serif', }}
            className={`flex items-center justify-center space-x-1 me-5 px-2 py-1 rounded-lg transition-colors w-[120px]
            ${estado === "none" ? "bg-blue-800 hover:bg-blue-500" : ""}
            ${estado === "pending" ? "bg-yellow-100" : ""}
            ${estado === "confirmed" ? "bg-green-100" : ""}
            ${estado === "blocked" ? "bg-red-100" : ""}
        `}
        >
            {renderContenido()}
        </button>
    );
};
export default SubBotonAmistad;
