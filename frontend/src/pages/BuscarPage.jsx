import { useState, useEffect, useCallback } from "react";
import { estadoFriendship } from "../estados/estadoFriendship";

function BuscarPage() {
    const {
        buscarAmigoPorUsername,
        buscarAmigoPorEmail,
        amigosEncontrados,
        isSearchingFriend
    } = estadoFriendship();

    const [tipoBusqueda, setTipoBusqueda] = useState("Username");
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");

    // Limpiar error si el usuario escribe
    useEffect(() => {
        if (query.trim() !== "") {
            setError("");
        }
    }, [query]);

    const Busqueda = useCallback(() => {
        if (query.trim() === "") {
            setError("Ingrese un término de búsqueda.");
            return;
        }

        setError(""); // Limpiar error antes de realizar la búsqueda

        if (tipoBusqueda === "Username") {
            buscarAmigoPorUsername(query);
        } else {
            buscarAmigoPorEmail(query);
        }
    }, [query, tipoBusqueda, buscarAmigoPorUsername, buscarAmigoPorEmail]);

    return (
        <div className="border-2 border-blue-800 w-[1000px] h-[520px] overflow-auto text-black">
            <div className="text-2xl bg-blue-800 text-white px-4 py-2 flex items-center">
                <label htmlFor="tipoBusqueda" className="mr-4">Buscar</label>
                <select
                    id="tipoBusqueda"
                    className="select select-bordered w-[250px] h-6 bg-gray-200 text-black ml-10"
                    value={tipoBusqueda}
                    onChange={(e) => setTipoBusqueda(e.target.value)}
                >
                    <option value="Username">Username</option>
                    <option value="Email">Email</option>
                </select>
            </div>

            {/* Input de búsqueda */}
            <div className="mt-4 flex gap-4">
                <input
                    type="text"
                    className="border bg-gray-200 border-gray-400 p-2 w-[500px] h-7 rounded ml-5"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && Busqueda()}
                    aria-label="Campo de búsqueda"
                />
                <button
                    className="bg-blue-800 text-white text-center px-4  rounded h-7 hover:scale-105"
                    onClick={Busqueda}
                    disabled={isSearchingFriend}
                >
                    {isSearchingFriend ? "Buscando..." : "Buscar"}
                </button>
            </div>

            {/* Mensaje de error */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {/* Resultados de búsqueda */}
            <div className="mt-1">
                {isSearchingFriend ? (
                    <p className="text-gray-500">Buscando amigos...</p>
                ) : amigosEncontrados.length === 0 ? (
                    <p className="text-gray-500">No se encontraron resultados.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full py-3">
                        {amigosEncontrados.map((amigo) => (
                            <button
                                key={amigo._id}
                                className="flex items-center gap-4 p-1 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                            >
                                <img
                                    src={amigo.fotoPerfil || "/src/imagenes/defaultFoto.jpg"}
                                    alt={`Foto de perfil de ${amigo.username}`}
                                    className="w-20 h-20"
                                    onError={(e) => e.target.src = "/src/imagenes/defaultFoto.jpg"}
                                />
                                <div>
                                    <p className="text-lg font-semibold">{amigo.username}</p>
                                    <p className="text-gray-500">{amigo.email}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>

    );
}

export default BuscarPage;
