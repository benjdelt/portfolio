import { Suspense } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Loader from '../components/Loader';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
      return (
        <Suspense fallback={
          <Section background>
            <Loader />
          </Section>
        }>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Suspense>
      )
}

export default MyApp
