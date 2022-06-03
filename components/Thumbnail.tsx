import React from 'react';
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

import Movie from '../models/movie';
import Link from 'next/link';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

interface Props {
  result: Movie;
}

const Thumbnail = ({ result }: Props) => {
  const releaseYear =
    result.release_date?.split('-')[0] || result.first_air_date?.split('-')[0];

  return (
    <Link href={`/details/${result.id}?media_type=${result.media_type}`}>
      <div className="group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          layout="responsive"
          height={1080}
          width={1920}
        />
        <div className="p-2">
          <p className="truncate max-w-md">{result.overview}</p>
          <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
            {result.title || result.original_name}
          </h2>
          <p className="flex items-center md:opacity-0 group-hover:opacity-100 transition-all duration-100 ease-in-out">
            {result.media_type && `${result.media_type.toUpperCase()} •`}{' '}
            {releaseYear} • <ThumbUpIcon className="h-5 mx-2" />{' '}
            {result.vote_count}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
