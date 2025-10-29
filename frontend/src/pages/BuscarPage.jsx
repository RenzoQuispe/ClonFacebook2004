import { useState, useEffect, useCallback } from "react";
import { estadoFriendship } from "../estados/estadoFriendship";
import CardBuscar from "../components/CardBuscar";
import { estadoAuth } from "../estados/estadoAuth";
import SubBotonAmistad from "../components/SubBotonAmistad";
function BuscarPage() {
    const {
        buscarAmigoPorUsername,
        buscarAmigoPorEmail,
        amigosEncontrados,
        isSearchingFriend
    } = estadoFriendship();

    const {
        authUser,
    } = estadoAuth()

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
        <div className="w-[1100px] flex-grow flex py-1 space-x-2 justify-center">
            <CardBuscar />
            {/* Contenido */}
            <div style={{ border: '2px solid #3b5998', fontFamily: '"Lucida Grande", Tahoma, Verdana, Arial, sans-serif', }} className=" w-[990px] h-[650px] overflow-auto text-black">
                <div style={{ background: '#3b5998' }} className="text-2xl text-white px-4 py-2 flex items-center">
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
                        <p className="ml-10 mt-10 text-gray-500">No se encontraron resultados.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-5 py-3">
                            {amigosEncontrados.map((amigo) => (
                                <div
                                    key={amigo._id}
                                    className="flex w-[400px] items-center gap-4 p-1 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                                    onClick={() => console.log(`Ver perfil de ${amigo.username}`)}
                                >
                                    <img
                                        src={amigo.fotoPerfil || "/src/imagenes/defaultFoto.jpg"}
                                        alt={`Foto de perfil de ${amigo.username}`}
                                        className="w-20 h-20"
                                        onError={(e) => (e.target.src = "/src/imagenes/defaultFoto.jpg")}
                                    />
                                    <div className="flex-1">
                                        <p className="text-lg font-semibold">{amigo.username}</p>
                                        <p className="text-gray-500">{amigo.email}</p>
                                    </div>

                                    {/* Subbotón separado al final */}
                                    <SubBotonAmistad authId={authUser._id} amigoId={amigo._id} />
                                </div>
                            ))}
                        </div>

                    )}
                </div>
            </div>
        </div>


    );
}

export default BuscarPage;
