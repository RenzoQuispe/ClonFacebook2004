import { Link } from "react-router";
const Navbar = () => {
    return (

        <header className="top-0 w-full h-25 mx-auto bg-cover bg-center" style={{ backgroundImage: "url('/src/imagenes/navbar.PNG')" }}>
            <div className="relative z-10 flex items-center justify-between px-6 h-full">
                <nav className="flex gap-5 text-white text-2xl">
                    <Link to="/login" className="hover:underline ml-193 mt-17">Login</Link>
                    <Link to="/register" className="hover:underline mt-17">Register</Link>
                    <Link to="/about" className="hover:underline mt-17">About</Link>
                    <Link to="/faq" className="hover:underline mt-17">Faq</Link>
                </nav>
            </div>
        </header>

    );
};

export default Navbar;
