import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="O programa Clube de Vantagens dos Servidores Públicos Municipais estabelece parcerias entre a Prefeitura de Bezerros e empresas e/ou instituições de diversos ramos de atuação, com a finalidade de oferecer descontos ou condições especiais na aquisição de produtos e serviços para os servidores municipais." />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:description" content="O programa Clube de Vantagens dos Servidores Públicos Municipais estabelece parcerias entre a Prefeitura de Bezerros e empresas e/ou instituições de diversos ramos de atuação, com a finalidade de oferecer descontos ou condições especiais na aquisição de produtos e serviços para os servidores municipais." />
        <meta property="og:image" content="https://clubedevantagens.bezerros.pe.gov.br/logo-verde.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:description" content="O programa Clube de Vantagens dos Servidores Públicos Municipais estabelece parcerias entre a Prefeitura de Bezerros e empresas e/ou instituições de diversos ramos de atuação, com a finalidade de oferecer descontos ou condições especiais na aquisição de produtos e serviços para os servidores municipais." />
        <meta property="twitter:image" content="https://clubedevantagens.bezerros.pe.gov.br/logo-verde.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />

        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LBHL69ZG9M"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LBHL69ZG9M');
          `}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
