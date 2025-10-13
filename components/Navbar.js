import Image from "next/image";

import logo from "../public/logo.png"
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fonte-principal">
                    <div className="container">
                        <Link className="navbar-brand text-white" href="/">
                            <Image src={logo} height={100} />
                        </Link>
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="bx bx-menu bx-md text-white"></i>
                        </button>
                        <div className="collapse navbar-collapse text-align-right" id="navbarNav">
                            <ul className="navbar-nav ms-auto align-items-center">

                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="/empresas-participantes">EMPRESAS PARTICIPANTES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="/inscreva-sua-empresa">INSCREVA SUA EMPRESA</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}