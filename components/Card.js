
export default function Card({ nome, logo, texto, instagram, whatsapp, mapa }) {

    return (
        <>
            <div className="card bg-light border-0 shadow d-flex justify-content-center align-items-center flex-column" style={{ width: '17rem' }}>
                <img src={logo} className="card-cover mt-2 shadow rounded bg-white" style={{ width: '16rem', height: '16rem' }} alt={"Logo " + nome}>
                </img>
                <h3 className="text-center fonte-principal mt-3 text-muted">{nome}</h3>
                <div className="d-flex p-2 fonte-auxiliar mb-3" style={{ width: '17rem' }}>
                    {texto}
                </div>

                <div className="mt-auto justify-content-center d-flex align-items-center">
                    <a href={whatsapp} target="_blank"><i className="bx bxl-whatsapp bx-sm text-muted p-3"></i></a>
                    <a href={instagram} target="_blank"><i className="bx bxl-instagram bx-sm text-muted p-3"></i></a>
                    <a href={mapa} target="_blank"><i className="bx bx-map-pin bx-sm text-muted p-3"></i></a>
                </div>

            </div>
        </>
    )
}