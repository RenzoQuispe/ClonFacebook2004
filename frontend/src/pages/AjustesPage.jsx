function AjustesPage() {
    return (
        <div style={{ border: '2px solid #3b5998', fontFamily: '"Lucida Grande", Tahoma, Verdana, Arial, sans-serif', }} className=" bg-white w-[1196px] h-[1620px]">
            {/* Encabezado */}
            <div style={{ background: '#3b5998' }} className=" text-white px-4 py-2 text-2xl">Ajustes</div>
            {/* Contenido */}
            <div style={{ fontFamily: '"Lucida Grande", Tahoma, Verdana, Arial, sans-serif', }} className="flex gap-4">
                {/* Contenido en la izquierda*/}
                <div>
                    {/* Herramientas y recursos */}
                    <div style={{ border: '2px solid #3b5998' }} className=" bg-white w-[570px] h-[500px] ml-4 mt-4">
                        <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl">Herramientas y recursos</div>
                    </div>
                    {/* Preferencias */}
                    <div style={{ border: '2px solid #3b5998' }} className=" bg-white w-[570px] h-[500px] ml-4 mt-4">
                        <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl">Preferencias</div>
                    </div>
                    {/* Público y visibilidad */}
                    <div style={{ border: '2px solid #3b5998' }} className=" bg-white w-[570px] h-[500px] ml-4 mt-4">
                        <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl">Público y visibilidad</div>
                    </div>


                </div>
                {/* Contenido en la derecha */}
                <div>
                    {/* Tu actividad */}
                    <div style={{ border: '2px solid #3b5998' }} className=" w-[570px] h-[758px] mt-4" >
                        <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl">Tu actividad</div>
                    </div>
                    {/* Normas comunitarias y políticas legales*/}
                    <div style={{ border: '2px solid #3b5998' }} className=" w-[570px] h-[758px] mt-4" >
                        <div style={{ background: '#3b5998' }} className=" text-white px-4 py-1 text-2xl">Normas comunitarias y políticas legales</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AjustesPage;