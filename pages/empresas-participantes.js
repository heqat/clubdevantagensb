import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card"
import Head from "next/head";

export default function EmpresasParticipantes() {
    return (
        <>
            <Head>
                <title>Empresas Participantes - Clube de Vantagens dos Servidores Públicos Municipais - Prefeitura de Bezerros</title>
            </Head>
            <main>
                <Navbar />
                <h2 className="text-center m-3 text-muted fonte-principal">Empresas participantes</h2>

                <section className="container my-3 d-flex justify-content-center gap-3 flex-wrap">
                    
                    <Card nome={"IMET Cursos"} logo={"/imet-logo.jpeg"} whatsapp={"https://wa.me/5581991991095"} instagram={"https://www.instagram.com/imet.oficial/"} mapa={"https://goo.gl/maps/4QWPMTjFpLnW4rra6"} texto={"20% de desconto correspondente aos valores das mensalidades de cursos de Educação Profissional; Até 60% de desconto correspondente aos valores das mensalidades dos cursos de graduação e pós-graduação; Até 10% de desconto correspondente aos valores das mensalidades dos cursos técnicos."} />
                    <Card nome={"Arruda Diagnósticos"} logo={"/arruda-logo.jpeg"} whatsapp={"https://wa.me/5581982031145"} instagram={"https://www.instagram.com/arrudadiagnosticos/"} mapa={"https://goo.gl/maps/Xq2wi6jxn9cgCaYq9"} texto={"20% de desconto em toda a parte laboratorial, relacionada a exames clínicos."} />
                    <Card nome={"i9 Studio Personal"} logo={"/i9-logo.jpg"} whatsapp={"https://wa.me/5581989234332"} instagram={"https://www.instagram.com/i9studio_personal/"} mapa={"https://goo.gl/maps/4qxtAm1ADgUjSDuC6"} texto={"10% de desconto na mensalidade, referente a atividade de musculação; 15% de desconto na mensalidade, referente a atividade de pilates; 15% de desconto em cada sessão, referente a atividade de Reeducação Postural Global - RPG; 14% de desconto nas consultas/atendimentos junto à nutricionista; 20% de desconto em cada sessão de depilação à laser."} />
                    <Card nome={"Farmácia Nossa Senhora da Conceição"} logo={"/farmacia-nsc-logo.jpeg"} whatsapp={"https://wa.me/5581971201524"} instagram={"https://www.instagram.com/farmacia.ns.conceicao/"} mapa={"https://goo.gl/maps/u898eYzg7RtabJBHA"} texto={"17% nos medicamentos éticos; 10% de desconto nos medicamentos genéricos; 10% de desconto nos medicamentos de fabricação similar; 5% de desconto nos artigos de perfumaria; Medicamentos de uso continuo, sendo para o tratamento de diabetes, colesterol e hipertensão, a cada 03 caixas adquiridas, a 4ª caixa é grátis."} />
                    <Card nome={"Salute Centro de Saúde"} logo={"/salute-logo.jpg"} whatsapp={"https://wa.me/5581996479718"} instagram={"https://www.instagram.com/salute_centrodesaude/"} mapa={"https://goo.gl/maps/DgbkPGif6vYRyhtW9"} texto={"30% de desconto nas matrículas referente a natação, pilates e hidroginástica; 15% de desconto no pacote com 10 sessões de fisioterapia em pagamento à vista e 10% no cartão de crédito; 10% de desconto no pacote com 10 sessões, no atendimento em psicologia. Pagamento à vista ou cartão de crédito; R$ 10,00 (dez reais) de desconto referente à mensalidade de musculação."}/>
                    <Card nome={"Drogasil"} logo={"/drogasil-logo.jpeg"} whatsapp={"https://wa.me/5581982441577"} instagram={"https://www.instagram.com/drogasilbezerros/"} mapa={"https://goo.gl/maps/APhfJknMZSraENP4A"} texto={"Até 65% de desconto nos medicamentos de fabricação genérica; Até 20% de desconto nos medicamentos de referência e de fabricação similar; Até 10% de desconto nos artigos de dermocosméticos."}/>
                    <Card nome={"Coluna Saudável"} logo={"/coluna-saudavel-logo.png"} whatsapp={"https://wa.me/5581996896215"} instagram={"https://www.instagram.com/colunasaudavelqrp/"} mapa={"https://goo.gl/maps/ojqShoMAseryJBjf6"} texto={"50% de desconto na avaliação para o tratamento de quiropraxia; 40% de desconto no valor dos pacotes de tratamento de quiropraxia, podendo ser pago à vista ou mediante cartão de crédito."} />
                    <Card nome={"Print Mais Brindes"} logo={"/print-logo.png"} whatsapp={"https://wa.me/5581981641344"} instagram={"https://www.instagram.com/printmaisbrindes/"} mapa={"https://goo.gl/maps/HvLbSJqP9s8xJAXV6"} texto={"10% de desconto para brindes, canecas, copos e demais produtos gráficos."} />
                    <Card nome={"Mercadinho de Demir"} logo={"/mercadinho-demir-logo.jpeg"} whatsapp={"https://wa.me/5581987510605"} instagram={"https://www.instagram.com/mercadinhode_demir/"} mapa={"https://goo.gl/maps/ahnDbwtTFtUAp7vR7"} texto={"3% de desconto a cada R$ 100,00 em compras, em qualquer tipo de produto disponível no supermercado."} />
                    <Card nome={"Água de Cheiro"} logo={"/agua-de-cheiro-logo.jpg"} whatsapp={"https://wa.me/5581992564270"} instagram={"https://www.instagram.com/aguadecheirobezerrospe/"} mapa={"https://maps.app.goo.gl/ddf4X5ZpYaWJhPyVA"} texto={"15% de desconto em qualquer produto à vista, dinheiro ou pix; 10% de desconto nas compras realizadas nas demais modalidades (débito ou crédito)."} />
                    <Card nome={"Santé Fit"} logo={"/sante-fit-logo.jpg"} whatsapp={"https://wa.me/5581999737905"} instagram={"https://www.instagram.com/sante.fit/"} mapa={"https://maps.app.goo.gl/76kyASaGf3TiWVHP9"} texto={"25% na mensalidade, já incluídos no pacote as modalidades de dança, jump, step e artes marciais."} />
                    <Card nome={"Óticas Braynner"} logo={"/oticas-braynner-logo.jpeg"} whatsapp={"https://wa.me/5581996028187"} instagram={"https://www.instagram.com/oticasbraynner/"} mapa={"https://maps.app.goo.gl/6Bqkmha4T6Z354FVA"} texto={"30% de desconto na compra de óculos completo de grau (lentes e armação), para compras à vista, via pix ou dinheiro; 20% de desconto na compra de óculos completo de grau (lentes e armação) e ou solar, para compras divididas por meio de cartão de crédito; 15% de desconto na compra de lentes corretivas de grau, à vista ou dividida por meio de cartão de crédito."} />
                    <Card nome={"Autoescola Bandeirantes"} logo={"/autoescola-bandeirantes-logo.jpeg"} whatsapp={"https://wa.me/5581983240471"} instagram={"https://www.instagram.com/bandeirantes_bezerros/"} mapa={"https://maps.app.goo.gl/MZhRndJvKWaZm4Y47"} texto={"20% desconto à vista; 10% desconto no cartão de crédito."} />
                    <Card nome={"Laciac Diagnósticos"} logo={"/laciac-diagnosticos-logo.jpg"} whatsapp={"https://wa.me/5581986779571"} instagram={"https://www.instagram.com/laciacdiagnosticos/"} mapa={"https://maps.app.goo.gl/oUrLmYd2tN8Pe5cZ7"} texto={"Serviços laboratoriais (análises clínicas, citologia, biopsia, teste paternidade, sexagem fetal, teste pezinho) - 10% desconto para pagamentos cartão crédito/débito e 30% desconto para pagamentos dinheiro ou pix; Serviço em estética (limpeza de pele) - 15% desconto para pagamento dinheiro ou pix."} />

                </section>


                <Footer />
            </main>
        </>
    )
}