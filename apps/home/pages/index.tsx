import Head from 'next/head';
import readmeText from '../../../README.md';
import Home from '../components/Home';

export async function getServerSideProps() {
  return {
    props: {
      readmeText,
    }, // will be passed to the page component as props
  };
}

type Props = {
  readmeText: string;
};

export default function Index({ readmeText }: Props) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Home readmeText={readmeText} />
    </div>
  );
}
