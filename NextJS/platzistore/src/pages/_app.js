import '../styles/globals.css';
import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <>
      <Head>
        <title>React Shop</title>
      </Head>
      <AppContext.Provider value={initialState}>
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
