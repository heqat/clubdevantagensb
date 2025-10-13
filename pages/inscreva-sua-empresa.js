import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function InscrevaSuaEmpresa() {
    return (
        <>
            <Head>
                <title>Inscreva sua Empresa - Clube de Vantagens dos Servidores Públicos Municipais - Prefeitura de Bezerros</title>
            </Head>
            <main>
                <Navbar />
                <div className="container">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc3uC6Z_QY3rP3e-W_xrc0JHZBwVo7Xc154Rk17N2YTbqwaHg/viewform?embedded=true" width="100%" height="903" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
                </div>
                <Footer />
            </main>
        </>
    )
}