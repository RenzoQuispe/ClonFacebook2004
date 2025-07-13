import CardSocial from "../components/CardSocial";
import { estadoFriendship } from "../estados/estadoFriendship";
import { useEffect } from "react";
import toast from "react-hot-toast";
const SolicitudesPage = () => {
    const { listarSolicitudes, solicitudesRecibidas, aceptarSolicitud, eliminarSolicitud } = estadoFriendship();
    useEffect(() => {
        listarSolicitudes();
    }, []);

    const clickAceptarSolicitud = async (e, id) => {
        e.stopPropagation();
        const res = await aceptarSolicitud(id);
        if (res.ok) {
            toast.success("Solicitud aceptada :D");
        } else {
            toast.error(res.message);
        }
        console.log("Solicitud aceptada :D")
    };
    
    const clickEliminarSolicitud = async (e, id) => {
        e.stopPropagation();
        const res = await eliminarSolicitud(id);
        if (res.ok) {
            toast.success("Solicitud Rechazada");
        } else {
            toast.error(res.message);
        }
        console.log("Solicitud no aceptada :/")
    };

    return (
        <div className="w-[1100px] flex-grow flex py-1 space-x-2 justify-center">
            <CardSocial />
            <div style={{ border: '2px solid #3a5898' }} className=" bg-white w-[890px] h-[500px]">
                {/* Encabezado */}
                <div style={{ background: '#3a5898' }} className=" text-white px-4 py-2 text-2xl">Solicitudes</div>
                {/* Contenido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-5 py-3">
                    {
                        solicitudesRecibidas.map(solicitud => (
                            <div key={solicitud._id}
                                className="text-black flex w-[400px] items-center gap-4 p-1 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-101"
                                onClick={() => console.log(`Ver perfil de ${solicitud.username}`)}
                            >
                                <img
                                    src={solicitud.fotoPerfil || "/src/imagenes/defaultFoto.jpg"}
                                    alt={`Foto de perfil de ${solicitud.username}`}
                                    className="w-20 h-20"
                                    onError={(e) => (e.target.src = "/src/imagenes/defaultFoto.jpg")}
                                />
                                <div className="flex-1">
                                    <p className="text-black text-lg font-semibold">{solicitud.username}</p>
                                    <p className="text-gray-500">{solicitud.email}</p>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <button className="px-1 rounded-sm bg-blue-400 hover:brightness-120 transition" onClick={(e) => clickAceptarSolicitud(e, solicitud._id)} >Aceptar</button>
                                    <button className="px-1 rounded-sm bg-red-400 hover:brightness-120 transition" onClick={(e) => clickEliminarSolicitud(e, solicitud._id)} >Eliminar</button>
                                </div>

                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}
export default SolicitudesPage;