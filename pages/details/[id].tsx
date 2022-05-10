import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import { GetServerSideProps } from 'next';

import { PlusCircleIcon } from '@heroicons/react/outline';
import Movie from '../../models/movie';
import CustomTab from '../../components/CustomTab';
import TV from '../../models/tv';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

interface Props {
  movie: Movie;
  tv: TV;
}

const DetailsScreen = ({ movie, tv }: Props) => {
  return (
    <div className="">
      <div className="relative h-[32rem] flex items-center justify-center">
        <Image
          className="opacity-100 object-cover -z-10"
          src={
            `${BASE_URL}${movie.backdrop_path || tv.backdrop_path}` ||
            `${BASE_URL}${movie.poster_path}`
          }
          layout="fill"
        />
        <div className="absolute h-full w-full bg-gradient-to-t from-rose-800 to-black opacity-60 -z-10"></div>
      </div>
      <div className="mx-5 absolute top-64 md:left-10 xl:left-24 md:top-20 max-w-2xl">
        <div className="flex">
          <div className="w-1/3 hidden md:block">
            <Image
              src={BASE_URL + tv.poster_path}
              layout="responsive"
              width={600}
              height={1000}
            />
          </div>
          <div className="md:ml-10 md:w-2/3 self-end">
            <div>
              <h1 className="mb-2 text-white text-2xl">
                {movie.title || movie.original_name}
              </h1>
              <p className="text-gray-200 mb-1 line-clamp-2 md:line-clamp-4">
                {movie.overview}
              </p>
              <p className="mb-2">Action • Movie • 2022</p>
            </div>
            <div className="w-full">
              <button className=" mt-4 bg-white w-full py-2 rounded-md text-gray-700 font-bold tracking-wider text-sm transform hover:scale-105 transition-all duration-200">
                START WATCHING: S1 E1
              </button>
              <div className="mt-5 flex items-center cursor-pointer hover:text-white transition-all duration-100">
                <PlusCircleIcon className="w-auto h-7 block" />
                <p className="text-[0.65rem] tracking-widest font-bold ml-1">
                  MY STUFF / RECORD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomTab content={tv} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params && context.query) {
    let result;

    try {
      result = await axios.get(
        `https://api.themoviedb.org/3/${context.query.media_type}/${context.params.id}?api_key=${process.env.API_KEY}&language=en-US`
      );

      return {
        props: { movie: result.data, tv: result.data, id: context.params.id },
      };
    } catch (error) {
      return { props: { error } };
    }
  }

  return { notFound: true };
};

export default DetailsScreen;

// export default dynamic(() => Promise.resolve(DetailsScreen), { ssr: false });
