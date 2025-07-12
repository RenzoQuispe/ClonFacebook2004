import { estadoFriendship } from "../estados/estadoFriendship";
import { UserPlus, Ban, Check, Mail } from "lucide-react";
import { useEffect } from "react";
const SubBotonAmistad = ({ authId, amigoId }) => {
    const key = [authId, amigoId].sort().join("-");
    const { estados, estadoAmistad, friendshipIds } = estadoFriendship();
    const estado = estados[key] || "none";

    useEffect(() => {
        estadoAmistad(authId, amigoId);
    }, [authId, amigoId]);

    const handleClick = (e) => {
        e.stopPropagation();

        switch (estado) {
            case "none":
                console.log("Enviar solicitud");
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
                        <UserPlus className="w-5 h-5 text-white" />
                        <span className="text-white text-sm">Añadir</span>
                    </>
                );
            case "pending":
                return (
                    <>
                        <Mail className="w-5 h-5 text-yellow-400" />
                        <span className="text-yellow-400 text-sm">Pendiente</span>
                    </>
                );
            case "confirmed":
                return (
                    <>
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-green-600 text-sm">Amigos</span>
                    </>
                );
            case "blocked":
                return (
                    <>
                        <Ban className="w-5 h-5 text-red-600" />
                        <span className="text-red-600 text-sm">Bloqueado</span>
                    </>
                );
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`flex items-center space-x-1 me-5 px-2 py-1 rounded-sm transition-colors
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
