import Head from 'next/head';
import readmeText from '../../../../docs/SETUP_NODE.md';
import UIMarkdown from '../../components/UIMarkdown';

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
        <title>Setup Node Guide</title>
      </Head>
      <UIMarkdown text={readmeText} />
    </div>
  );
}
