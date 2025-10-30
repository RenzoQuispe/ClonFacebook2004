import { Link } from "react-router";
const Estilo = {
    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Tahoma, Verdana, sans-serif',
};
function CardBuscar(){

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
            }} className="flex flex-col h-55 mt-3  ">
                <Link to='/perfil' className="text-blue-800 hover:underline">Mi Perfil[editar]</Link>
                <Link to='/amigos' className="text-blue-800 hover:underline">Mis Amigos</Link>
                <Link to='/grupos' className="text-blue-800 hover:underline">Mis Grupos</Link>
                <Link to='/chat' className="text-blue-800 hover:underline">Mensajes</Link>
                <Link to='/solicitudes' className="text-blue-800 hover:underline">Solicitudes</Link>
                <Link to='/ajustes' className="text-blue-800 hover:underline">Mi Cuenta</Link>
                <Link className="text-blue-800 hover:underline">Mi Privacidad</Link>
            </div>
        </div>
    )
}
export default CardBuscar;