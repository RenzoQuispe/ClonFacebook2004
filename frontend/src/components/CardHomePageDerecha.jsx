import { Link } from "react-router";

const Estilo = {
    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Tahoma, Verdana, sans-serif',
};

function CardHomeDerecha() {
    return (
        <div style={{...Estilo, }} className="bg-gray-100 w-[245px] text-black">
            <div>
                <h1 className="bg-gray-200 text-blue-800 p-1">Solicitudes</h1>
            </div>
            <div>
                <h1 className="bg-gray-200 text-blue-800 mt-3 p-1">Mensajes</h1>
            </div>
            <div>
                <h1 className="bg-gray-200 text-blue-800 mt-3 p-1">Mi estado</h1>
            </div>
            <div>
                <h1 className="bg-gray-200 text-blue-800 mt-3 p-1">Proximos eventos</h1>
            </div>
            <div>
                <h1 className="bg-gray-200 text-blue-800 mt-3 p-1">Amigos Conectados</h1>
            </div>
        </div>
    )
}
export default CardHomeDerecha;