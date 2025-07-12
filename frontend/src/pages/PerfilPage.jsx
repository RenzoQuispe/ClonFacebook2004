import { estadoAuth } from "../estados/estadoAuth";
import { useState } from "react";
import { Camera } from "lucide-react";
import CardPerfil from "../components/CardPerfil";
function PerfilPage() {
    const { authUser, isUpdatingProfile, actualizarPerfil } = estadoAuth();
    const [selectedImg, setSelectedImg] = useState(null);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = async () => {
            const foto = reader.result;
            setSelectedImg(foto);
            await actualizarPerfil({ fotoPerfil: foto });
        };
    };

    return (
        <div className="w-[1100px] flex-grow flex py-1 space-x-2 justify-center">
            <CardPerfil/>
            {/*Perfil Contenido */}
            <div style={{ border: '2px solid #3a5898' }} className=" bg-white w-[890px] h-[800px]">
                {/* Encabezado */}
                <div style={{ background: '#3a5898' }} className=" text-white px-4 py-1 text-2xl">{authUser?.username || "Cargando..."} </div>
                {/* Contenido Perfil */}
                <div className="flex gap-4 items-start max-w-5xl mx-auto mt-4">
                    {/* Contenido en la izquierda*/}
                    <div>
                        {/* Foto de perfil */}
                        <div style={{ border: '2px solid #3a5898' }} className=" bg-white w-[300px] h-[340px] ml-4">
                            <div style={{ background: '#3a5898' }} className=" text-white px-4 py-1 text-2xl justify-between">
                                <div className="relative">
                                    <label>Foto</label>
                                    <label
                                        htmlFor="avatar-upload"
                                        className={`
                            absolute bottom-0 right-0 
                            hover:scale-110
                            cursor-pointer 
                            transition-all duration-200 text-2xl
                            ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                        `}
                                    >
                                        [editar]
                                        <input
                                            type="file"
                                            id="avatar-upload"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            disabled={isUpdatingProfile}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src={selectedImg || authUser.fotoPerfil || "/src/imagenes/defaultFoto.jpg"}
                                    alt=""
                                    className="size-70 object-cover border-1 ml-2 mt-2"
                                />
                            </div>
                        </div>
                        {/* Conexion */}
                        <div style={{ border: '2px solid #3a5898' }} className=" bg-white w-[300px] h-[150px] ml-4 mt-4">
                            <div style={{ background: '#3a5898' }} className=" text-white px-4 py-1 text-2xl">Conexión</div>
                        </div>
                    </div>
                    {/* Contenido en la derecha */}
                    <div>
                        {/* Informacion */}
                        <div style={{ border: '2px solid #3a5898' }} className=" w-[535px] h-[700px]" >
                            <div style={{ background: '#3a5898' }} className=" text-white px-4 py-1 text-2xl">Información</div>
                        </div>
                    </div>
                </div>




            </div>
        </div>

    )
}
export default PerfilPage;