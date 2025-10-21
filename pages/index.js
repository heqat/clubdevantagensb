import Footer from '../components/Footer.js'

import Head from 'next/head'
import logo from '../public/logo.png'

import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clube de Vantagens dos Servidores Públicos Municipais - Prefeitura de Bezerros</title>
      </Head>

      <main>
        <Navbar />


<section id="hero" className="w-100 position-relative">
  <div
    className="hero-bg"
    style={{
      backgroundImage: "url('/2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="overlay"></div>
    <div className="container p-5 text-center position-relative">
      <Image src={logo} height={200} alt="Logo" />
      <p className="mx-auto mt-3 fs-5 text-white fonte-auxiliar">
         O programa Clube de Vantagens dos Servidores Públicos Municipais estabelece
        parcerias entre a Prefeitura de Bezerros e empresas e/ou instituições de diversos
        ramos de atuação, com a finalidade de oferecer descontos ou condições especiais na
        aquisição de produtos e serviços para os servidores municipais. </p>
    </div>
  </div>
  
</section>

<section className="valorizacao">
  
  <div className="container py-5">
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card-valor shadow-sm p-4 h-100 text-center">
          <i className="bx bx-user-circle icon-valor"></i>
          <h3 className="titulo-valor">Servidor Valorizado</h3>
         <div className="linha-verde"></div>
          <p className="descricao-valor">
            Para usufruir das vantagens, é necessário apresentar um documento oficial de identidade e o último contracheque.
          </p>
          <Link href="/empresas-participantes" className="btn btn-valor">
            Empresas participantes
            
          </Link>
        </div>
      </div>
    
      <div className="col-md-6">
        <div className="card-valor shadow-sm p-4 h-100 text-center">
          <i className="bx bx-buildings icon-valor"></i>
          <h3 className="titulo-valor">Empresa Valorizada</h3>
          <div className="linha-verde"></div>
          <p className="descricao-valor">
            Atraia mais clientes, aumente seu público de atuação e consiga melhores resultados para sua empresa.
          </p>
          <Link href="/inscreva-sua-empresa" className="btn btn-valor">
            Inscrever minha empresa
          </Link>
        </div>
      </div>
    </div>
    
  </div>
     <a className="d-flex justify-content-center text-center" href="/Lei n 1.424.2022 - Clube de Vantagens do Servidor.pdf" target="_blank">Veja a íntegra da Lei Municipal nº 1.424/2022, que instituiu o programa.</a>


</section>


        <Footer />
      </main>

    </>
  )
}
