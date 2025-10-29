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
            <div style={{...Estilo, border:"#3b5998 1px solid"}}  className=" w-[725px] h-full overflow-auto text-black">
                <div style={{background:"#3b5998", border:"#3b5998 1px solid"}}  className=" text-2xl text-white px-4 py-1 flex items-center">
                    <label htmlFor="tipoBusqueda" className="mr-4">¡Bienvenido {authUser.username}!</label>
                </div>
                {/*Contenido */}
                <div style={{border:"#3b5998 1px solid "}}  className=" mt-3 ml-3 w-[700px] h-[605px] overflow-auto text-black"></div>
            </div>
            <CardHomeDerecha />
        </div>
    )
}
export default HomePage;