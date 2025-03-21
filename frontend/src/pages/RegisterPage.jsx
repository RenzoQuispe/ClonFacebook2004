import { useState } from "react";
import { estadoAuth } from "../estados/estadoAuth";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router";

function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const { signup, isSigningUp } = estadoAuth();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const validateForm = () => {
        if (!formData.username.trim()) return toast.error("Username requerido :/");
        if (!formData.email.trim()) return toast.error("Email requerido :/");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Email invalido :/");
        if (!formData.password) return toast.error("Contraseña requerida :/");
        if (formData.password.length < 6) return toast.error("La contraseña debe tener al menos 6 caracteres");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = validateForm();
        if (success === true) signup(formData);
    };


    return (

        <div className="border-2 border-blue-800 bg-white w-[800px] h-[360px]">
            {/* Encabezado */}
            <div className="bg-blue-800 text-white px-4 py-2 font-bold text-2xl">
                Registrarse
            </div>
            <p className="ml-15 mr-15 py-3  text-sm">
                Para registrarte en thefacebook, simplemente completa los cuatro campos a continuación.
                Podrás ingresar información adicional y subir una foto de perfil una vez registrado.
            </p>
            {/* Cuerpo del formulario */}
            <form onSubmit={handleSubmit} className="space-y-2 text-sm text-gray-800 w-[450px] ml-45">
                {/* username */}
                <div className="form-control flex justify-between items-center">
                    <label className="block">Nombre:</label>
                    <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="input input-bordered w-[250px] h-6 bg-gray-200 "
                    />
                </div>
                {/* email */}
                <div className="form-control flex justify-between items-center">
                    <label className="block ">Email(universitario):</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input input-bordered w-[250px] h-6  bg-gray-200"
                    />
                </div>
                {/* contraseña */}
                <div className="form-control flex justify-between">
                    <label className="block">Contraseña*:</label>
                    <div className="relative ">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="input input-bordered w-[250px] h-6  bg-gray-200"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeOff className="size-5 text-base-content/40" />
                            ) : (
                                <Eye className="size-5 text-base-content/40" />
                            )}
                        </button>
                    </div>
                </div>
                {/* status (NO FUNCIONAL DE MOMENTO) */}
                <div className="flex justify-between items-center">
                    <label className="block">Status:</label>
                    <select className="select select-bordered w-[250px] h-6  bg-gray-200">
                        <option>Estudiante Pregrado</option>
                        <option>Estudiante Postgrado</option>
                    </select>
                </div>

                {/* Checkbox de términos (NO FUNCIONAL DE MOMENTO) */}
                <div className="flex items-center mt-3">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span className="ml-2">
                        He leído y comprendido los {" "}
                        <a href="#" className="text-blue-600">Términos de uso</a>,  y los acepto.
                    </span>
                </div>
                {/* Nota sobre la contraseña */}
                <p className="text-xs text-gray-600 mt-2">
                    * Puedes elegir cualquier contraseña. No tiene que ser, ni debería ser, la contraseña de tu escuela.
                </p>
                {/* Botón de registro */}
                <button type="submit" className="bg-blue-600 text-white w-[160px] ml-40 px-1 py-1" disabled={isSigningUp}>
                    {isSigningUp ? (
                        <>
                            <Loader2 className="size-5 animate-spin" />
                            Loading...
                        </>
                    ) : (
                        "Crear Cuenta"
                    )}
                </button>
            </form>
        </div>
    );
}
export default RegisterPage;