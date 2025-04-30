import React, { useState } from "react";
import { Link } from "react-router";

import CardLoginRegister from "../components/CardLoginRegister";

const FaqPage = () => {
    const [currentOpen, setCurrentOpen] = useState(null);

    const toggleContent = (id) => {
        setCurrentOpen((prev) => (prev === id ? null : id));
    };

    return (
        <div style={{ border: '2px solid #3a5898' }} className="w-[1100px] h-[1150px]">
            {/*CardLoginRegister y Contenido RegisterPage */}
            <div className="w-[1100px] flex-grow flex py-1 space-x-2 justify-center">
                <CardLoginRegister />
                <div style={{ border: '2px solid #405c9c' }} className=" bg-white w-[800px] h-[1050px]">
                    {/* Encabezado */}
                    <div style={{ backgroundColor: '#3a5898' }} className=" text-white px-4 py-2 font-bold text-2xl">
                        Preguntas Frecuentes
                    </div>
                    <h1 className="text-2xl font-bold text-center mb-4 mt-5">
                        [ FAQ ]
                    </h1>
                    {/* Preguntas */}
                    <div className=" flex flex-col items-center justify-center w-[800px] h-[900px]">

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px]" onClick={() => toggleContent(1)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Qué es Thefacebook?</p>
                            <div
                                id="content-1"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 1 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Thefacebook es un directorio en línea que conecta a personas a través de redes sociales en colegios y universidades.
                                </p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(2)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Cómo obtienen nuestra información? ¿La escuela se las da?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 2 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Tu escuela no nos proporciona ninguna información sobre ti. Toda la información e imágenes son proporcionadas voluntariamente por los usuarios.</p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(3)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Cómo puedo proteger mi privacidad?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 3 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Puedes ajustar tu [configuración de privacidad] para permitir que solo personas dentro de ciertas divisiones de escuelas puedan ver tu información. También puedes configurarlo para que solo personas que tengan algo en común contigo (por ejemplo, casa, año, curso, amigos) puedan ver tu información. Además, puedes crear diferentes configuraciones de privacidad para distintas partes de tu perfil: información de contacto, información personal, cursos y amigos.</p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(4)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Pueden unirse personas de otras universidades?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 4 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Sí, las personas de otros colegios pueden unirse a Thefacebook, pero nadie de otro colegio podrá ver tu perfil o red social a menos que los hayas listado como amigos. Cada universidad tiene su propia subsección dentro del sitio, donde sus miembros pueden ver los perfiles de los demás.</p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(5)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Qué es la red social?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 5 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Tu red social es el grupo de todos los usuarios cuyos ajustes de privacidad te permiten ver su información. Para hacerlo más interesante, también lo limitamos solo a usuarios que han subido imágenes. Al hacer clic en "social net", se muestran diez usuarios aleatorios de tu red.</p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(6)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Por qué la red social repite personas?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 6 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Dado que la selección de quién se muestra es aleatoria, existe la posibilidad de que la misma persona aparezca en dos páginas. Este problema se resolverá a medida que se unan más personas.</p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(7)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Cómo busco cosas que no sean nombres?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 7 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Puedes hacer clic en la opción "Buscar en todos los campos" en la página de búsqueda, o simplemente ir directamente a la página de [búsqueda].</p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(8)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">Si rechazo a alguien, ¿lo sabrá?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 8 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">No. Cuando rechazas a alguien, su solicitud de amistad saldrá de tu lista de solicitudes de amistad para confirmar, pero no se le notificará. Tampoco podrá enviarte otra solicitud de amistad por un tiempo, así que parecerá como si no hubieras confirmado la amistad todavía.</p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(9)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Cómo puedo ver la visualización?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 9 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Para ver las redes sociales visualizadas, necesitas tener instalado el plugin SVG en tu navegador. La instalación toma unos 15 segundos; puedes obtenerlo [aquí].</p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(10)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Por qué la visualización es lenta?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 10 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Cada vez que ves una visualización, necesitamos comprobar si tienes los privilegios apropiados para ver a cada persona en el gráfico. Esto toma tiempo. Además, para mantener el buen rendimiento del resto del sitio, configuramos el sistema para procesar otras solicitudes con mayor prioridad que las visualizaciones.

                                </p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(11)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Cómo navego por la visualización?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 11 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Mantén presionada la tecla 'Alt' mientras arrastras para desplazarte, o haz clic derecho para hacer zoom. Pedimos disculpas por la dificultad para navegar en las visualizaciones. No hicimos el visor SVG; solo lo usamos para mostrarte imágenes bonitas.</p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(12)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Puedo cambiar mi nombre y contraseña?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 12 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Sí — puedes solicitar un cambio de nombre y cambiar tu contraseña en la página de [mi cuenta]. Por control de calidad, confirmamos todos los cambios de nombre antes de que se hagan efectivos. Los cambios de contraseña tienen efecto inmediato.

                                </p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(13)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Qué es el “poking”?
                            </p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 13 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Sabemos tanto como tú. Pensamos que sería divertido hacer una función sin propósito específico y ver qué pasa. Así que diviértete con ella, porque no recibirás una explicación de nuestra parte.

                                </p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(14)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Quién hizo este sitio?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 14 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Consulta la página [about].

                                </p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(15)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Cuándo se lanzó el sitio?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 15 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Fue lanzado al público el miércoles 4 de febrero de 2004.</p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(16)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Es este un proyecto de clase?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 16 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">No, solo por diversión.

                                </p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(17)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">¿Qué tipo de algoritmos de teoría de grafos usan para procesar conexiones?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 17 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">Vamos a fingir que no hiciste esa pregunta.</p>
                            </div>
                        </div>

                        <div style={{ border: '2px solid #405c9c' }} className="text-clickable w-[600px] mt-3" onClick={() => toggleContent(18)}>
                            <p style={{ backgroundColor: '#405c9c' }} className=" text-white font-bold cursor-pointer text-center">Tengo una pregunta que no está en el FAQ. ¿Cómo la hago?</p>
                            <div
                                id="content-2"
                                className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 18 ? 'max-h-[200px]' : 'hidden'}`}
                            >
                                <p className=" text-center">[Envíanos un correo electrónico].</p>
                            </div>
                        </div>
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
};

export default FaqPage;
