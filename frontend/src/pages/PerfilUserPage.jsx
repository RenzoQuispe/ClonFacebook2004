import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { estadoFriendship } from "../estados/estadoFriendship";
import CardPerfil from "../components/CardPerfil";
import SubBotonAmistad from "../components/SubBotonAmistad";
import { estadoAuth } from "../estados/estadoAuth";
import NotFound from "../components/NotFound.jsx";

function PerfilUserPage() {
    const { id } = useParams();
    const { authUser } = estadoAuth();
    const { obtenerUserPorId } = estadoFriendship();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const data = await obtenerUserPorId(id);
            setUserData(data);
            setLoading(false);
            console.log("Datos obtenidos del backend:", data);
        };
        fetchUser();
    }, [id, obtenerUserPorId]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen text-gray-600">Cargando perfil...</div>;
    }

    if (!userData) {
        return <NotFound />;
    }

    return (
        <div className="w-[1100px] flex-grow flex py-1 space-x-2 justify-center">
            <CardPerfil />

            <div
                style={{ border: '2px solid #5b6e9cff', fontFamily: '"Lucida Grande", Tahoma, Verdana, Arial, sans-serif' }}
                className=" bg-white w-[990px] h-[1460px]"
            >
                <div style={{ background: '#5b6e9cff' }} className=" text-white px-4 py-1 text-2xl flex justify-between items-center">
                    <span>{userData.username}</span>
                    {/* botón amistad solo si no es tu propio perfil */}
                    {authUser._id !== userData._id && (
                        <SubBotonAmistad authId={authUser._id} amigoId={userData._id} />
                    )}
                </div>

                {/* Contenido */}
                <div className="flex gap-4 items-start max-w-5xl mx-auto mt-4">
                    {/* Izquierda */}
                    <div>
                        <div style={{ border: '2px solid #5b6e9cff' }} className="flex items-center justify-center bg-white w-[350px] h-[350px] ml-4">

                            <div className="relative">
                                <img
                                    src={userData.fotoPerfil || "/src/imagenes/defaultFoto.jpg"}
                                    alt={`Foto de ${userData.username}`}
                                    className="size-80 object-cover border-1"
                                />
                            </div>
                        </div>

                        {/* Secciones laterales (reutilizables) */}
                        <div style={{ border: '2px solid #5b6e9cff' }} className=" bg-white w-[350px] h-[250px] ml-4 mt-4">
                            <div style={{ background: '#5b6e9cff' }} className=" text-white px-4 py-1 text-2xl">Fotos</div>
                        </div>

                        <div style={{ border: '2px solid #5b6e9cff' }} className=" bg-white w-[350px] h-[250px] ml-4 mt-4">
                            <div style={{ background: '#5b6e9cff' }} className=" text-white px-4 py-1 text-2xl">Amigos</div>
                        </div>
                    </div>

                    {/* Derecha */}
                    <div>
                        <div style={{ border: '2px solid #5b6e9cff' }} className=" w-[585px] h-[615px]">
                            <div style={{ background: '#5b6e9cff' }} className=" text-white px-4 py-1 text-2xl">Sobre {userData.username}</div>
                            <div className="p-4">Email: {userData.email}</div>
                        </div>

                        <div style={{ border: '2px solid #5b6e9cff' }} className=" w-[585px] h-[750px] mt-4">
                            <div style={{ background: '#5b6e9cff' }} className=" text-white px-4 py-1 text-2xl">Mini - Feed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerfilUserPage;
