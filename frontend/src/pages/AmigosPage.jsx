import { estadoFriendship } from "../estados/estadoFriendship";
import { useEffect } from "react";

function AmigosPage() {
    const { getAmigos, amigos } = estadoFriendship();

    useEffect(() => {
        getAmigos();
    }, [getAmigos]);



    return (
        // Lista Amigos
        <div className="border-2 border-blue-800 bg-white w-[1000px] h-[500px]">
            {/* Encabezado */}
            <div className="bg-blue-800 text-white px-4 py-2 text-2xl">Amigos</div>
            {/* Lista de amigos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full py-3">
                {amigos.map((amigo) => (
                    <button
                        key={amigo._id}
                        className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                    >
                        {/* Imagen de perfil */}
                        <img
                            src={amigo.fotoPerfil || "/src/imagenes/defaultFoto.jpg"}
                            className="w-25 h-25 object-cover border border-gray-300"
                        />

                        {/* Nombre de usuario */}
                        <div className="font-medium text-black text-lg">{amigo.username}</div>
                    </button>
                ))}
            </div>
        </div>
    )
}
export default AmigosPage;