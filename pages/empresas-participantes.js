import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card"
import Head from "next/head";

export default function EmpresasParticipantes() {
     const [busca, setBusca] = useState("");

     const empresas = [
  {
    nome: "IMET Cursos",
    logo: "/imet-logo.jpeg",
    whatsapp: "https://wa.me/5581991991095",
    instagram: "https://www.instagram.com/imet.oficial/",
    mapa: "https://goo.gl/maps/4QWPMTjFpLnW4rra6",
    texto: "20% de desconto correspondente aos valores das mensalidades de cursos de Educação Profissional; Até 60% de desconto correspondente aos valores das mensalidades dos cursos de graduação e pós-graduação; Até 10% de desconto correspondente aos valores das mensalidades dos cursos técnicos."
  },
  {
    nome: "i9 Studio Personal",
    logo: "/i9-logo.jpg",
    whatsapp: "https://wa.me/5581989234332",
    instagram: "https://www.instagram.com/i9studio_personal/",
    mapa: "https://goo.gl/maps/4qxtAm1ADgUjSDuC6",
    texto: "10% de desconto na mensalidade, referente a atividade de musculação; 15% de desconto na mensalidade, referente a atividade de pilates; 15% de desconto em cada sessão, referente a atividade de Reeducação Postural Global - RPG; 14% de desconto nas consultas/atendimentos junto à nutricionista; 20% de desconto em cada sessão de depilação à laser."
  },
  {
    nome: "Salute Centro de Saúde",
    logo: "/salute-logo.jpg",
    whatsapp: "https://wa.me/5581996479718",
    instagram: "https://www.instagram.com/salute_centrodesaude/",
    mapa: "https://goo.gl/maps/DgbkPGif6vYRyhtW9",
    texto: "30% de desconto nas matrículas referente a natação, pilates e hidroginástica; 15% de desconto no pacote com 10 sessões de fisioterapia em pagamento à vista e 10% no cartão de crédito; 10% de desconto no pacote com 10 sessões, no atendimento em psicologia. Pagamento à vista ou cartão de crédito; R$ 10,00 (dez reais) de desconto referente à mensalidade de musculação."
  },
  {
    nome: "Coluna Saudável",
    logo: "/coluna-saudavel-logo.png",
    whatsapp: "https://wa.me/5581996896215",
    instagram: "https://www.instagram.com/colunasaudavelqrp/",
    mapa: "https://goo.gl/maps/ojqShoMAseryJBjf6",
    texto: "50% de desconto na avaliação para o tratamento de quiropraxia; 40% de desconto no valor dos pacotes de tratamento de quiropraxia, podendo ser pago à vista ou mediante cartão de crédito."
  },
  {
    nome: "Print Mais Brindes",
    logo: "/print-logo.png",
    whatsapp: "https://wa.me/5581981641344",
    instagram: "https://www.instagram.com/printmaisbrindes/",
    mapa: "https://goo.gl/maps/HvLbSJqP9s8xJAXV6",
    texto: "10% de desconto para brindes, canecas, copos e demais produtos gráficos."
  },
  {
    nome: "Mercadinho de Demir",
    logo: "/mercadinho-demir-logo.jpeg",
    whatsapp: "https://wa.me/5581987510605",
    instagram: "https://www.instagram.com/mercadinhode_demir/",
    mapa: "https://goo.gl/maps/ahnDbwtTFtUAp7vR7",
    texto: "3% de desconto a cada R$ 100,00 em compras, em qualquer tipo de produto disponível no supermercado."
  },
  {
    nome: "Água de Cheiro",
    logo: "/agua-de-cheiro-logo.jpg",
    whatsapp: "https://wa.me/5581992564270",
    instagram: "https://www.instagram.com/aguadecheirobezerrospe/",
    mapa: "https://maps.app.goo.gl/ddf4X5ZpYaWJhPyVA",
    texto: "15% de desconto em qualquer produto à vista, dinheiro ou pix; 10% de desconto nas compras realizadas nas demais modalidades (débito ou crédito)."
  },
  {
    nome: "Santé Fit",
    logo: "/sante-fit-logo.jpg",
    whatsapp: "https://wa.me/5581999737905",
    instagram: "https://www.instagram.com/sante.fit/",
    mapa: "https://maps.app.goo.gl/76kyASaGf3TiWVHP9",
    texto: "25% na mensalidade, já incluídos no pacote as modalidades de dança, jump, step e artes marciais."
  },
  {
    nome: "Autoescola Bandeirantes",
    logo: "/autoescola-bandeirantes-logo.jpeg",
    whatsapp: "https://wa.me/5581983240471",
    instagram: "https://www.instagram.com/bandeirantes_bezerros/",
    mapa: "https://maps.app.goo.gl/MZhRndJvKWaZm4Y47",
    texto: "20% desconto à vista; 10% desconto no cartão de crédito."
  },
  {
    nome: "Laciac Diagnósticos",
    logo: "/laciac-diagnosticos-logo.jpg",
    whatsapp: "https://wa.me/5581986779571",
    instagram: "https://www.instagram.com/laciacdiagnosticos/",
    mapa: "https://maps.app.goo.gl/oUrLmYd2tN8Pe5cZ7",
    texto: "Serviços laboratoriais (análises clínicas, citologia, biopsia, teste paternidade, sexagem fetal, teste pezinho) - 10% desconto para pagamentos cartão crédito/débito e 30% desconto para pagamentos dinheiro ou pix; Serviço em estética (limpeza de pele) - 15% desconto para pagamento dinheiro ou pix."
  }
];

  const empresasFiltradas = empresas.filter((empresa) =>
    empresa.nome.toLowerCase().includes(busca.toLowerCase())
  );

    return (
        <>
            <Head>
                <title>Empresas Participantes - Clube de Vantagens dos Servidores Públicos Municipais - Prefeitura de Bezerros</title>
            </Head>
            <main>
                <Navbar />
                <section className="container text-center my-5">
    <h2 className="fonte-principal text-muted">EMPRESAS PARTICIPANTES</h2>
    <div className="linha-verde"></div>

     <div className="barra-pesquisa">
            <i className="bx bx-search"></i>
            <input
              type="text"
              placeholder="Buscar empresa..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
  </section>
                 <section className="container cards-empresas d-flex justify-content-center gap-4 flex-wrap">
          {empresasFiltradas.length > 0 ? (
            empresasFiltradas.map((empresa, i) => (
              <Card
                key={i}
                nome={empresa.nome}
                logo={empresa.logo}
                whatsapp={empresa.whatsapp}
                instagram={empresa.instagram}
                mapa={empresa.mapa}
                texto={empresa.texto}
              />
            ))
          ) : (
            <p className="text-muted">Nenhuma empresa encontrada! (adicionar sugestão?) </p>
          )}
        </section>

                <Footer />
            </main>
        </>
    )
}