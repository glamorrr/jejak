import Head from 'next/head';
import NavigationBar from '../components/NavigationBar';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import NotFoundSection from '../components/NotFoundSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Halaman Tidak Ditemukan – Jejak</title>
        <meta
          name="description"
          content="Tingkatkan produktivitasmu dengan aplikasi jejak."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <NavigationBar />
      <Wrapper as="main">
        <NotFoundSection />
      </Wrapper>
      <Footer />
    </>
  );
}
