import Head from 'next/head';
import NavigationBar from '../components/NavigationBar';
import Wrapper from '../components/Wrapper';
import DescriptionSection from '../components/DescriptionSection';
import PriceSection from '../components/PriceSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AwardSection from '../components/AwardSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jejak – Tingkatkan Produktivitas</title>
        <meta
          name="description"
          content="Tingkatkan produktivitasmu dengan aplikasi jejak."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <NavigationBar />
      <Wrapper as="main">
        <HeroSection />
        <AwardSection />
        <DescriptionSection />
        <PriceSection />
      </Wrapper>
      <Footer />
    </>
  );
}
