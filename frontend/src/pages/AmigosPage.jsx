import { estadoFriendship } from "../estados/estadoFriendship";
import { useEffect } from "react";
import Social from "../components/Social";
function AmigosPage() {
    const { getAmigos, amigos } = estadoFriendship();

    useEffect(() => {
        getAmigos();
    }, [getAmigos]);



    return (
        <div className="w-[1100px] flex-grow flex py-1 space-x-2 justify-center">
            <Social />
            <div style={{ border: '2px solid #3a5898' }} className=" bg-white w-[890px] h-[500px]">
                {/* Encabezado */}
                <div style={{ background: '#3a5898' }} className=" text-white px-4 py-2 text-2xl">Amigos</div>
                {/* Lista de amigos / Contenido */}
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
        </div>

    )
}
export default AmigosPage;