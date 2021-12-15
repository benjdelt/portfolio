import { Suspense } from 'react';
import Loader from '../components/Loader';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
      return (
        <Suspense fallback={<Loader />}>
          <Component {...pageProps} />
        </Suspense>
      )
}

export default MyApp
