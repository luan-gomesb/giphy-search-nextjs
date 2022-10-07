import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
type AboutProps = {
  name: string;
  age: number;
};

const About: NextPage<AboutProps> = (initialContent: AboutProps) => {
  const { name, age } = initialContent;

  useEffect(() => {
    console.log(initialContent);
  });

  return (
    <div className="container mx-auto">
      <Head>
        <title>About</title>
        <meta name="description" content="Giphy search app about page" />
      </Head>

      <main className="text-center">
        <h1>
          {name} - {age}
        </h1>
      </main>
    </div>
  );
};

export const getStaticProps = (): { props: AboutProps } => {
  return {
    props: { name: 'Luan Gomes berto', age: 28 },
  };
};

export default About;
