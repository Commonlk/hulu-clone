import React from 'react';

import Movie from '../models/movie';
import Thumbnail from './Thumbnail';

interface Props {
  results: Movie[];
}

const Results = ({ results }: Props) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {results.map(result => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
