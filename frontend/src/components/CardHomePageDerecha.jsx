import { Link } from "react-router";

const Estilo = {
    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Tahoma, Verdana, sans-serif',
};

function CardHomeDerecha() {
    return (
        <div style={{...Estilo}} className="bg-gray-100 w-[200px] text-black">
            <div>
                <h1 className="bg-gray-200 font-bold">Solicitudes</h1>
            </div>
            <div>
                <h1 className="bg-gray-200 font-bold mt-3">Mensajes</h1>
            </div>
            <div>
                <h1 className="bg-gray-200 font-bold mt-3">Mi estado</h1>
            </div>
            <div>
                <h1 className="bg-gray-200 font-bold mt-3">Proximos eventos</h1>
            </div>
            <div>
                <h1 className="bg-gray-200 font-bold mt-3">Amigos Conectados</h1>
            </div>
        </div>
    )
}
export default CardHomeDerecha;