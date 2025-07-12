import { Link } from "react-router";
import CardLoginRegister from "../components/CardLoginRegister";
function AboutPage() {
    return (
        <div style={{ border: '2px solid #3a5898' }} className="w-[1100px] h-[500px]">
            {/*CardLoginRegister y Contenido RegisterPage */}
            <div className="w-[1100px] flex-grow flex py-1 space-x-2 justify-center">
                <CardLoginRegister />
                <div className="flex flex-col border-2 border-blue-800 bg-white w-[800px] h-[380px] p-5 text-black">
                    <h1 className="text-2xl font-bold text-center mb-3">
                        [ Bienvenido a Thefacebook ]
                    </h1>
                    <p>
                        Thefacebook es un directorio en línea que conecta a personas a través de redes sociales en universidades.
                        Hemos abierto Thefacebook para uso público en: <strong>UNI - UNMSM - UNALM</strong>.
                    </p>
                    <h3 className="mt-2">Puedes usar Thefacebook para:</h3>
                    <ul className="list-disc list-inside">
                        <li>Buscar personas en tu institución</li>
                        <li>Ver quién está en tus clases</li>
                        <li>Buscar los amigos de tus amigos</li>
                        <li>Conversar con amigos</li>
                        <li>Hacer publicaciones y ver publicaciones de tus amigos</li>
                        <li>Ver una visualización de tu red social</li>
                    </ul>

                    <p className="mt-2">
                        Para empezar, haz clic a continuación para registrarte. Si ya te has registrado, puedes iniciar sesión.
                    </p>
                    {/**Botones*/}
                    {/* Botón de logeo */}
                    <div className="justify-between p-2">
                        <Link to={"/register"} className={`btn gap-2 h-7 text-lg bg-blue-600  text-white ml-45`}>
                            <span className="hidden sm:inline">Registrarse</span>
                        </Link>
                        <Link to={"/login"} className={`btn gap-2 h-7 bg-blue-600 text-lg text-white ml-25`}>
                            <span className="hidden sm:inline">Iniciar Sesión</span>
                        </Link>
                    </div>

                </div>

            </div>
            {/* Pie de Pagina */}
            <div className="flex flex-col items-center justify-center mt-5">
                <div className="space-x-5">
                    <Link to='/about' className="text-blue-800">about</Link>
                    <Link className="text-blue-800">contact</Link>
                    <Link to='/faq' className="text-blue-800">faq</Link>
                    <Link className="text-blue-800">terms</Link>
                    <Link className="text-blue-800">privacy</Link>
                </div>
                <p>
                    ClonTheFacebook2004 &#169;
                </p>

            </div>
        </div>

    );

}
export default AboutPage;