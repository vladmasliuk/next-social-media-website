import Head from 'next/head';
import '../styles/globals.css'
// components
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
          <title>Social media website</title>
          <meta name="description" content="Website for social media app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
