import CardHomeDerecha from "../components/CardHomePageDerecha";
import CardHomeIzquierda from "../components/CardHomePageIzquierda";
import { estadoAuth } from "../estados/estadoAuth";
const Estilo = {
    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Tahoma, Verdana, sans-serif',
};
function HomePage() {
    const {authUser} = estadoAuth();
    return (
        <div className="flex text-black space-x-3 mt-2">
            <CardHomeIzquierda />
            <div style={{...Estilo, border:"#7084b4 1px solid"}}  className=" w-[675px] h-full overflow-auto text-black">
                <div style={{background:"#7084b4", border:"#7084b4 1px solid"}}  className=" text-2xl text-white px-4 py-1 flex items-center">
                    <label htmlFor="tipoBusqueda" className="mr-4">¡Bienvenido {authUser.username}!</label>
                </div>
                {/*Contenido */}
                <div style={{border:"#7084b4 1px solid "}}  className=" mt-3 ml-3 w-[650px] h-[520px] overflow-auto text-black"></div>
            </div>
            <CardHomeDerecha />
        </div>
    )
}
export default HomePage;