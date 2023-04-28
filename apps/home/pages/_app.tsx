import { AppProps } from 'next/app';
import '../styles/UIMarkdown.scss';
import '../styles/global.scss';
import { Nunito } from 'next/font/google';
import Head from 'next/head';

const nunito = Nunito({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className={nunito.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
