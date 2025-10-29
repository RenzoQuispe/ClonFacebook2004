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
            <CardPerfil />
            {/*Perfil Contenido */}
            <div style={{ border: '2px solid #3b5998', fontFamily: '"Lucida Grande", Tahoma, Verdana, Arial, sans-serif', }} className=" bg-white w-[990px] h-[1460px]">
                {/* Encabezado */}
                <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl">{authUser?.username || "Cargando..."} </div>
                {/* Contenido Perfil */}
                <div style={{ fontFamily: '"Lucida Grande", Tahoma, Verdana, Arial, sans-serif', }} className="flex gap-4 items-start max-w-5xl mx-auto mt-4">
                    {/* Contenido en la izquierda*/}
                    <div>
                        {/* Foto de perfil */}
                        <div style={{ border: '2px solid #3b5998' }} className=" bg-white w-[350px] h-[350px] ml-4">
                            <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl justify-between h-[40px]">
                                <div className="relative">
                                    <label
                                        htmlFor="avatar-upload"
                                        className={`
                                            inline-block
                                            hover:scale-110
                                            cursor-pointer
                                            transition-transform
                                            duration-200 
                                            text-lg
                                            h-[30px]
                                            ml-65
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
                                    className="size-70 object-cover border-1 ml-8 mt-2"
                                />
                            </div>
                        </div>
                        {/* Fotos */}
                        <div style={{ border: '2px solid #3b5998' }} className=" bg-white w-[350px] h-[250px] ml-4 mt-4">
                            <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl">Fotos</div>
                        </div>
                        {/* Amigos en mi red*/}
                        <div style={{ border: '2px solid #3b5998' }} className=" bg-white w-[350px] h-[250px] ml-4 mt-4">
                            <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl">Amigos en mi red</div>
                        </div>
                        {/* Amigos en otras redes*/}
                        <div style={{ border: '2px solid #3b5998' }} className=" bg-white w-[350px] h-[250px] ml-4 mt-4">
                            <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl">Amigos en otras redes</div>
                        </div>


                    </div>
                    {/* Contenido en la derecha */}
                    <div>
                        {/* Informacion */}
                        <div style={{ border: '2px solid #3b5998' }} className=" w-[585px] h-[615px]" >
                            <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl">Sobre mí</div>
                        </div>
                        {/* Mini - muro */}
                        <div style={{ border: '2px solid #3b5998' }} className=" w-[585px] h-[750px] mt-4" >
                            <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl">Mini - Feed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PerfilPage;