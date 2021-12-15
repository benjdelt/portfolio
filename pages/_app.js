import { Suspense } from 'react';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
      return (
        <Suspense fallback={<Loader />}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Suspense>
      )
}

export default MyApp
