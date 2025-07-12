import { useState } from "react";
import { estadoAuth } from "../estados/estadoAuth";
import { Link } from "react-router";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

import CardLoginRegister from "../components/CardLoginRegister";

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const { login, isLoggingIn } = estadoAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        login(formData);
    };

    return (
        <div style={{ border: '2px solid #3a5898' }} className="w-[1100px] h-[500px]">
            {/*CardLoginRegister y Contenido RegisterPage */}
            <div className="w-[1100px] flex-grow flex py-1 space-x-2 justify-center">
                <CardLoginRegister />
                <div className="items-center border-2 border-blue-800 bg-white w-[800px] h-[380px]">
                    <h1 className="ml-86 font-bold text-2xl mt-15 text-black">[ Login ]</h1>
                    {/* Cuerpo del formulario */}
                    <form onSubmit={handleSubmit} className="items-center py-4 space-y-4 text-sm text-gray-800 w-[450px] ml-45 mt-5">
                        {/* Campos del formulario */}
                        <div className="form-control flex justify-between items-center">
                            <label className="block ">Email:</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="input input-bordered w-[250px] h-6  bg-gray-200" />
                        </div>
                        {/* contraseña */}
                        <div className="form-control flex justify-between">
                            <label className="block">Contraseña:</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="input input-bordered w-[250px] h-6  bg-gray-200" />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-base-content/40 text-black" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-base-content/40 text-black" />
                                    )}
                                </button>
                            </div>
                        </div>
                        {/* Botón de logeo */}
                        <button style={{ backgroundColor: '#3a5898' }} type="submit" className=" text-white w-[160px] ml-40 px-1 py-1" disabled={isLoggingIn}>
                            {isLoggingIn ? (
                                <>
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    Loading...
                                </>
                            ) : (
                                "Entrar :D"
                            )}
                        </button>
                        {/* Restablecer contraseña (NO FUNCIONAL AUN)*/}
                        <div className="flex items-center mt-3 ml-6">
                            <span className="ml-2">
                                Si ha olvidado su contraseña, haga {" "}
                                <a href="#" className="text-blue-600">Clic Aquí</a> para restablecerla..
                            </span>
                        </div>
                    </form>
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

    )
}
export default LoginPage;