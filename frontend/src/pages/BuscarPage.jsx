import { useState, useEffect, useCallback } from "react";
import { estadoFriendship } from "../estados/estadoFriendship";
import CardBuscar from "../components/CardBuscar";
import { estadoAuth } from "../estados/estadoAuth";
import SubBotonAmistad from "../components/SubBotonAmistad";
import { useNavigate } from "react-router";

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

    const navigate = useNavigate();

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
                {error && <p className="text-red-500 mt-10 ml-10">{error}</p>}

                {/* Resultados de búsqueda */}
                <div className="mt-1">
                    {isSearchingFriend ? (
                        <p className="text-gray-500 ml-10 mt-10">Buscando amigos...</p>
                    ) : amigosEncontrados.length === 0 ? (
                        <p className="ml-10 mt-10 text-gray-500">No se encontraron resultados.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-5 py-3">
                            {amigosEncontrados.map((amigo) => (
                                <div
                                    key={amigo._id}
                                    className="flex items-center justify-between w-full h-[100px] max-w-[460px] p-2 bg-white rounded-lg shadow-xl hover:shadow-lg transition-all transform hover:scale-[1.02]"
                                    onClick={() => navigate(`/perfil/usuario/${amigo._id}`)}
                                >
                                    {/* Lado izquierdo: foto + info */}
                                    <div className="flex items-center gap-2 overflow-hidden">
                                        <div className="w-20 h-20 flex-shrink-0">
                                            <img
                                                src={amigo.fotoPerfil || "/src/imagenes/defaultFoto.jpg"}
                                                alt={`Foto de perfil de ${amigo.username}`}
                                                className="w-full h-full object-cover rounded-md"
                                                onError={(e) => (e.target.src = "/src/imagenes/defaultFoto.jpg")}
                                            />
                                        </div>

                                        <div className="min-w-0 ml-3">
                                            <p className="text-lg truncate font-semibold">{amigo.username}</p>
                                            <p className="text-gray-500 text-sm truncate">{amigo.email}</p>
                                        </div>
                                    </div>

                                    {/* Botón de amistad alineado al extremo derecho */}
                                    <div className="flex-shrink-0">
                                        <SubBotonAmistad authId={authUser._id} amigoId={amigo._id} />
                                    </div>
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
