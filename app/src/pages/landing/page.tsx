import QuemSomos from '../../components/landing/Quemsomos';
import Beneficios from '../../components/landing/Benefits';
import Contato from '../../components/landing/Contact';
import Eventos from '../../components/landing/Events';
import FAQ from '../../components/landing/Faq';
import Intro from '../../components/landing/Intro';
import Noticias from '../../components/landing/Noticias';

export default function LandingPage() {
  return (
    <>
      <Intro />
      <QuemSomos />
      <Beneficios />
      <FAQ />
      <Noticias />
      <Eventos />
      <Contato />
    </>
  );
}
