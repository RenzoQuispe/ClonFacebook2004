import { Link } from "react-router";
const Estilo = {
    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Tahoma, Verdana, sans-serif',
};
const CardSocial = () => {
    return (
        <div className="w-[200px] text-black">
            {/*Busqueda rapida */}
            <div style={{
                ...Estilo,
                border: '2px dashed #3a5898'
            }} className="h-25"
            >
                <input
                    className="input input-bordered w-[155px] h-6 ml-5 mt-5 bg-gray-300"
                />
                <div className="mt-3 ml-3 flex space-x-4">
                    <div>Busqueda rápida</div>
                    <button className=" text-white w-[40px] bg-blue-800">
                        go
                    </button>
                </div>
            </div>
            {/*social */}
            <div style={{
                ...Estilo,
                border: '2px dashed #3a5898',
                padding: '20px'
            }} className="flex flex-col h-60 mt-3  ">
                <Link to='/perfil' className="text-blue-800">Mi Perfil[editar]</Link>
                <Link to='/amigos' className="text-blue-800">Mis Amigos</Link>
                <Link to='/grupos' className="text-blue-800">Mis Grupos</Link>
                <Link to='/chat' className="text-blue-800">Mensajes</Link>
                <Link to='/solicitudes' className="text-blue-800">Solicitudes</Link>
                <Link to='/cuenta' className="text-blue-800">Mi Cuenta</Link>
                <Link to='/fotosvideos' className="text-blue-800">Mis fotos y videos</Link>
                <Link to='/privacidad' className="text-blue-800">Mi Privacidad</Link>
            </div>
        </div>
    )
}
export default CardSocial;