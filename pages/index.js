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

        <section id="hero" className='container'>
          <div className="container rounded-4 mt-3" style={{ backgroundImage: 'url(/2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="p-5 text-center">
              <Image src={logo} height={200} />
              <p className="mx-auto mt-3 fs-5 text-white fonte-auxiliar">
                O programa Clube de Vantagens dos Servidores Públicos Municipais estabelece parcerias entre a Prefeitura de Bezerros e empresas e/ou instituições de diversos ramos de atuação, com a finalidade de oferecer descontos ou condições especiais na aquisição de produtos e serviços para os servidores municipais.
              </p>

            </div>
          </div>
        </section>


        <section>
          <div className="container px-4 py-5">
            <div className="border-bottom"></div>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
              <div className="col d-flex justify-content-start align-items-center">
                <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 me-3">
                  <i className='bx bxs-user-rectangle bx-lg text-muted'></i>
                </div>
                <div>
                  <h3 className="fs-2 text-muted fonte-principal">Servidor valorizado</h3>
                  <p className='fonte-auxiliar text-muted'>Para usufruir das vantagens, é necessário apresentar um documento oficial de identidade e o último contracheque.</p>
                  <Link href="/empresas-participantes" className="btn btn-primary botao fonte-auxiliar">
                    Empresas participantes
                  </Link>
                </div>
              </div>
              <div className="col d-flex justify-content-start align-items-center">
                <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 me-3">
                  <i className='bx bxs-business bx-lg text-muted'></i>
                </div>
                <div>
                  <h3 className="fs-2 text-muted fonte-principal">Empresa valorizada</h3>
                  <p className="fonte-auxiliar text-muted">Atraia mais clientes, aumente seu público de atuação e consiga melhores resultados para sua empresa.</p>
                  <Link href="/inscreva-sua-empresa" className="btn btn-primary botao fonte-auxiliar">
                    Inscrever minha empresa
                  </Link>
                </div>
              </div>
            </div>
            <a className="d-flex justify-content-center text-center" href="/Lei n 1.424.2022 - Clube de Vantagens do Servidor.pdf" target="_blank">Veja a íntegra da Lei Municipal nº 1.424/2022, que instituiu o programa.</a>
          </div>
        </section>

        <Footer />
      </main>

    </>
  )
}
