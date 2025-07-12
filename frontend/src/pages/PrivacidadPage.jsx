import CardSocial from "../components/CardSocial";
const PrivacidadPage = () => {
    return(
        <div className="w-[1100px] flex-grow flex py-1 space-x-2 justify-center">
            <CardSocial />
            <div style={{ border: '2px solid #3a5898' }} className=" bg-white w-[890px] h-[500px]">
                {/* Encabezado */}
                <div style={{ background: '#3a5898' }} className=" text-white px-4 py-2 text-2xl">Privacidad</div>
                {/* Contenido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full py-3">
                    
                </div>
            </div>
        </div>
    )
}
export default PrivacidadPage;