import { Link } from "react-router";
import { estadoAuth } from "../estados/estadoAuth";
const Navbar = () => {
    const {logout, authUser} = estadoAuth(); // Las opciones mostradas por el Navbar dependen de si hay un susario autentificado o no
        
    return (
        <header className="top-0 w-full h-25 mx-auto bg-cover bg-center" style={{ backgroundImage: "url('/src/imagenes/navbar.PNG')" }}>
            <div className="relative z-10 flex items-center justify-between px-6 h-full">
                {/* Si el usuario está autenticado, mostrar opciones de usuario */}
                {authUser ? (
                    <nav className="flex gap-5 text-white text-2xl">
                        <Link to="/buscar" className="hover:underline ml-168 mt-17">Buscar</Link>
                        <Link to="/" className="hover:underline mt-17">Home</Link>
                        <Link to="/perfil" className="hover:underline mt-17">Perfil</Link>
                        <Link to="/amigos" className="hover:underline mt-17">Amigos</Link>
                        <Link to="/ajustes" className="hover:underline mt-17">Ajustes</Link>
                        <Link onClick={logout} className="hover:underline mt-17">Logout</Link>
                    </nav>
                ) : (
                    // Si NO está autenticado, mostrar opciones de login/registro
                    <nav className="flex gap-5 text-white text-2xl">
                        <Link to="/login" className="hover:underline ml-193 mt-17">Login</Link>
                        <Link to="/register" className="hover:underline mt-17">Register</Link>
                        <Link to="/about" className="hover:underline mt-17">About</Link>
                        <Link to="/faq" className="hover:underline mt-17">Faq</Link>
                    </nav>
                )}
            </div>
        </header>

    );
};

export default Navbar;
