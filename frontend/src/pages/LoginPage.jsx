import { useState } from "react";
import { estadoAuth } from "../estados/estadoAuth";
import { Link } from "react-router";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

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
        <div className="items-center border-2 border-blue-800 bg-white w-[800px] h-[360px]">
            <h1 className="ml-86 font-bold text-2xl mt-15">[ Login ]</h1>
            {/* Cuerpo del formulario */}
            <form onSubmit={handleSubmit} className="items-center py-3 space-y-3 text-sm text-gray-800 w-[450px] ml-45">
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
                                <EyeOff className="h-5 w-5 text-base-content/40" />
                            ) : (
                                <Eye className="h-5 w-5 text-base-content/40" />
                            )}
                        </button>
                    </div>
                </div>
                {/* Botón de logeo */}
                <button type="submit" className="bg-blue-600 text-white w-[160px] ml-40 px-1 py-1" disabled={isLoggingIn}>
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
    )
}
export default LoginPage;