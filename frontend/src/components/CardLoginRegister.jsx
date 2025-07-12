import { useState } from "react";
import { estadoAuth } from "../estados/estadoAuth";
import { Link } from "react-router";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

function CardLoginRegister() {
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
        <div style={{ border: '2px dotted #3a5898' }} className="w-[280px] h-[160px] p-4">
            {/* Cuerpo del formulario */}
            <form onSubmit={handleSubmit} className="items-center text-sm text-gray-800">
                {/* Campos del formulario */}
                {/* Email*/}
                <div className="form-control">
                    <label className="block ">Email:</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input input-bordered w-[250px] h-6  bg-gray-200" />
                </div>
                {/* contraseña */}
                <div className="form-control">
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
                {/*Botones */}
                <div className="flex justify-between space-x-5 mt-3">
                    {/* Botón de logeo */}
                    <button style={{ backgroundColor: '#3a5898' }} type="submit" className=" text-white w-[100px] ml-5 px-1 py-1" disabled={isLoggingIn}>
                        {isLoggingIn ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Loading...
                            </>
                        ) : (
                            "Login"
                        )}
                    </button>
                    {/* Boton de Registrarse*/}
                    <Link to='/register' style={{ backgroundColor: '#3a5898' }} className="text-white w-[100px] flex justify-center items-center">
                        Register
                    </Link>
                </div>


            </form>
        </div>
    )
}
export default CardLoginRegister;