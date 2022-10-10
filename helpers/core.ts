export const search = async (term: string) => {
  let giphys = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=nPJNlVceWHERWCSDBW5XMo1p90l7l9ie&limit=6`,
  );
  giphys = await giphys.json();
  return giphys;
};

export type Giphy = {
  title: string;
  images: { original: { url: string } };
};
