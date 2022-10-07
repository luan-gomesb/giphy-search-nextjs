import { Giphy } from '../helpers/core';

const ResultView = ({ giphys }: { giphys: Giphy[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {giphys.map((each, index) => {
        return (
          <div key={index} className="text-center">
            <h1 className="text-xl">{each.title}</h1>
            <img
              className="m-auto"
              src={each.images.original.url}
              alt={each.title}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ResultView;
