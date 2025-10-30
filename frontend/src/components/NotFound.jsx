import { Link } from "react-router";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 text-center overflow-hidden relative w-[1195px] h-[600px]">
      {/* efecto 404 rebotando */}
      <motion.h1
        initial={{ y: 0, opacity: 0 }}
        animate={{
          y: [0, -20, 0], // rebote suave
          opacity: 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="text-[8rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 drop-shadow-lg select-none"
      >
        404
      </motion.h1>

      {/* mensajes*/}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold mb-3"
      >
        Página no encontrada :(
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-400 mb-8 max-w-md"
      >
        <p>Parece que te perdiste en el universo de resultados.</p> 
        <p>Pero tranquilo, ¡podemos llevarte de vuelta!</p>
      </motion.p>

      {/* botón de regreso */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-cyan-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
        >
          Volver al inicio
        </Link>
      </motion.div>

      {/* luz de fondo decorativa */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-0 flex items-center justify-center -z-10"
      >
        <div className="w-[300px] h-[300px] bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur-3xl animate-pulse" />
      </motion.div>
    </div>
  );
}
