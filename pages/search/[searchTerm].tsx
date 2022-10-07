import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Giphy, search } from '../../helpers/core';
import ResultView from '../../components/ResultView';

type searchProps = {
  data: Giphy[];
};

const SearchTerm: NextPage<searchProps> = (initialData: searchProps) => {
  const router = useRouter();

  const renderResult = () => {
    const { data } = initialData;
    if (data.length > 0) {
      return <ResultView giphys={data} />;
    } else {
      return <h1>No items found fo this term</h1>;
    }
  };

  return (
    <div>
      <Head>
        <title>Search results for:{router.query.searchTerm}</title>
      </Head>
      <h1 className="text-3xl">Search: {router.query.searchTerm}</h1>
      {renderResult()}
    </div>
  );
};

export default SearchTerm;

export const getServerSideProps = async (context: any) => {
  const { searchTerm } = context.query;
  return await { props: search(searchTerm) };
};
