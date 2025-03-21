

function LoginPage() {
    return (
        <div className="items-center border-2 border-blue-800 bg-white w-[800px] h-[360px]">
            <h1 className="ml-86 font-bold text-2xl mt-15">[ Login ]</h1>
            {/* Cuerpo del formulario */}
            <div className="items-center py-3 text-sm text-gray-800 w-[450px] ml-45">
                {/* Campos del formulario */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="block ">Email:</label>
                        <input type="email" className="input input-bordered w-[250px] h-6  bg-gray-200" />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="block">Contraseña:</label>
                        <input type="password" className="input input-bordered w-[250px] h-6  bg-gray-200" />
                    </div>
                </div>
                {/* Botón de logeo */}
                <button className="bg-blue-600 text-white w-[160px] ml-40 px-1 py-2 mt-3">Entrar :D</button>
                {/* Restablecer contraseña */}
                <div className="flex items-center mt-3 ml-6">
                    <span className="ml-2">
                        Si ha olvidado su contraseña, haga {" "}
                        <a href="#" className="text-blue-600">Clic Aquí</a> para restablecerla..
                    </span>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;