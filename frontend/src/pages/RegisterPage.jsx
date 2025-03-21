import { useState } from "react";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import toast from "react-hot-toast";

function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
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


    return (

        <div className="items-center border-2 border-blue-800 bg-white w-[800px] h-[360px]">
            {/* Encabezado */}
            <div className="bg-blue-800 text-white px-4 py-2 font-bold text-2xl">
                Registrarse
            </div>
            <p className="ml-15 mr-15 py-3  text-sm">
                Para registrarte en thefacebook, simplemente completa los cuatro campos a continuación.
                Podrás ingresar información adicional y subir una foto de perfil una vez registrado.
            </p>
            {/* Cuerpo del formulario */}
            <div className="items-center py-2 text-sm text-gray-800 w-[450px] ml-45">
                {/* Campos del formulario */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="block">Nombre:</label>
                        <input type="text" className="input input-bordered w-[250px] h-6 bg-gray-200 " />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="block ">Email(universitario):</label>
                        <input type="email" className="input input-bordered w-[250px] h-6  bg-gray-200" />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="block">Contraseña*:</label>
                        <input type="password" className="input input-bordered w-[250px] h-6  bg-gray-200" />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="block">Status:</label>
                        <select className="select select-bordered w-[250px] h-6  bg-gray-200">
                            <option>Estudiante Pregrado</option>
                            <option>Estudiante Postgrado</option>
                        </select>
                    </div>
                </div>

                {/* Checkbox de términos */}
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
                <button className="bg-blue-600 text-white w-[160px] ml-40 px-1 py-1 ">Registrarse Ahora!</button>
            </div>
        </div>
    );
}
export default RegisterPage;