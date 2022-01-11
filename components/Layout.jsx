import Head from 'next/head'
import Nav from './Nav';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Benjamin Deltenre</title>
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
