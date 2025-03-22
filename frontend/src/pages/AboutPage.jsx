import { Link } from "react-router";

function AboutPage() {
    return (
        <div className="flex flex-col border-2 border-blue-800 bg-white w-[800px] h-[360px] p-6">
            <h1 className="text-2xl font-bold text-center mb-4">
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
            <div className="justify-between">
                <Link to={"/register"} className={`btn gap-2 h-7 text-lg bg-blue-600  text-white ml-45`}>
                    <span className="hidden sm:inline">Registrarse</span>
                </Link>
                <Link to={"/login"} className={`btn gap-2 h-7 bg-blue-600 text-lg text-white ml-25`}>
                  <span className="hidden sm:inline">Iniciar Sesión</span>
            </Link>
            </div>

        </div>
    );

}
export default AboutPage;