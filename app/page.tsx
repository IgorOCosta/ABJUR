import QuemSomos from "./src/components/landing/Quemsomos";
import Beneficios from "./src/components/landing/Benefits";
import Contato from "./src/components/landing/Contact";
import EbookSection from "./src/components/landing/EbookSection";
import Eventos from "./src/components/landing/Eventos";
import FAQ from "./src/components/landing/Faq";
import Header from "./src/components/landing/Header";
import Intro from "./src/components/landing/Intro";
import Noticias from "./src/components/landing/Noticias";
import Testimonials from "./src/components/landing/Testimonials";

export default function LandingPage() {
  return (
    <div >
      {/* Importando os componentes já criados */}
      <Header /> {/* O Header é adicionado aqui */}
      <Intro />
      <QuemSomos />
      <Beneficios />
      <FAQ />
      <Noticias />
      <EbookSection/>
      <Eventos />
      <Testimonials />

      <Contato />
    </div>
  );
}
