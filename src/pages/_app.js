import Head from 'next/head'
import GlobalStyle from '../styles/GlobalStyle'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adryane</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}