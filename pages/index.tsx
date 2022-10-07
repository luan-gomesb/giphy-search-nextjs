import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  ReactEventHandler,
  SyntheticEvent,
  useState,
} from 'react';
import ResultView from '../components/ResultView';
import { search } from '../helpers/core';

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const response: any = await search(searchTerm);
    setSearchResults(response.data);
  };

  return (
    <div>
      <Head>
        <title>Giphy Search</title>
        <meta name="description" content="Gif Search" />
      </Head>

      <main className="container mx-auto text-center">
        <h1 className="text-4xl m-16 mb-2 underline">Giphy seach App</h1>
        <div className="p-5">
          <form onSubmit={handleSubmit}>
            <input
              className="rounded-md p-2 text-white mx-4"
              type="search"
              onChange={handleChange}
              value={searchTerm}
            />
            <button className="bg-gray-600 rounded-full p-2 px-5" type="submit">
              {' '}
              Search{' '}
            </button>
          </form>
          <Link href={`search/${searchTerm}`} target="_blank">
            Show in another tab
          </Link>
        </div>
        <ResultView giphys={searchResults} />
      </main>
    </div>
  );
};

export default Home;
