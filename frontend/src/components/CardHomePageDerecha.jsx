import { useState } from "react";

const Estilo = {
  fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Tahoma, Verdana, sans-serif',
};

function Seccion({ titulo, children, abiertaPorDefecto = false }) {
  const [abierto, setAbierto] = useState(abiertaPorDefecto);

  return (
    <div className="mt-3 border border-gray-300 rounded-sm overflow-hidden bg-white">
      {/* Cabecera */}
      <button
        onClick={() => setAbierto(!abierto)}
        className="w-full flex justify-between items-center bg-gray-200 text-blue-800 p-1 px-2 hover:bg-gray-300 transition-colors duration-150"
      >
        <span>{titulo}</span>
        <span className="text-gray-600 text-sm">
          {abierto ? "▲" : "▼"}
        </span>
      </button>

      {/* Contenido */}
      {abierto && (
        <div className="p-2 text-sm text-gray-700 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
}

export default function CardHomeDerecha() {
  return (
    <div style={Estilo} className="bg-gray-100 w-[245px] text-black p-2">
      <Seccion titulo="Solicitudes">
        <p>No tienes solicitudes nuevas.</p>
      </Seccion>

      <Seccion titulo="Mensajes">
        <p>No hay mensajes nuevos.</p>
      </Seccion>

      <Seccion titulo="Mi estado">
        <p>Hoy me siento ...</p>
      </Seccion>

      <Seccion titulo="Próximos eventos">
        <p>No tienes eventos próximos.</p>
      </Seccion>
      
      <Seccion titulo="Amigos Conectados" abiertaPorDefecto>
        <p>Nadie conectado por ahora.</p>
      </Seccion>
    </div>
  );
}
