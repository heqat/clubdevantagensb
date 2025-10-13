import Image from "next/image";

import marcaPrefeitura from '../public/marca-prefeitura.png'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container m-auto row row-cols-1 row-cols-sm-2 row-cols-md-4 py-3">

                    <div className="col mb-3 d-flex justify-content-center justify-content-sm-start">
                        <a href="https://bezerros.pe.gov.br/" className="mt-2" target="_blank">
                            <Image src={marcaPrefeitura} height={85} />
                        </a>
                    </div>

                    <div className="col mb-3">
                        <h5 className='fonte-auxiliar'>Endereço</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 fonte-auxiliar">Praça Duque de Caxias, 88 - Térreo - Centro, Bezerros - PE.</li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5 className='fonte-auxiliar'>Horário de Funcionamento</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 fonte-auxiliar">Segunda a Sexta-feira, 07h às 13h.</li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5 className='fonte-auxiliar'>Contato</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2 fonte-auxiliar">Telefone: (81) 3728-6700.</li>
                        </ul>
                    </div>
                </div>
                <small className='d-flex container text-center justify-content-center'>&copy; Copyright - 2024 Prefeitura Municipal de Bezerros - PE. | Desenvolvido por T.I.C. Bezerros.</small>
            </footer>
        </>
    )
}