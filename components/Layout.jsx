import Head from 'next/head'
import Nav from './Nav';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Benjamin Deltenre</title>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" key="devicon" /> */}
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
