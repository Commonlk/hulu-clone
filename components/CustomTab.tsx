import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import TV, { Season } from '../models/tv';
import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/outline';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const tabs = [
  'Episodes',
  'Inside the Episodes',
  'Extras',
  'You may also like',
  'Details',
];

interface Props {
  content: TV;
}

const CustomTab = ({ content }: Props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [season, setSeason] = useState<Season>();
  const [seasonSelector, setSeasonSelector] = useState(1);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const result = await axios.get(
          `https://api.themoviedb.org/3/tv/${content.id}/season/${seasonSelector}?api_key=d74cb6bcf09d505ae75086e0f2b185d9&language=en-US`
        );

        setSeason(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEpisodes();
  }, [content.id, seasonSelector]);

  return (
    <Tabs
      className="pt-1 ml-5 -mt-[0.3rem]"
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <TabList className="flex mb-6 space-x-10 whitespace-nowrap overflow-x-scroll scrollbar-hide text-gray-400">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            className="pt-1 border-t-4 border-transparent cursor-pointer hover:border-white hover:text-white"
            selectedClassName="border-white text-white"
          >
            {tab}
          </Tab>
        ))}
      </TabList>

      <TabPanel>
        <>
          <div className="mb-3 w-fit">
            <select
              className="block w-full py-1.5 text-gray-300 bg-transparent transition ease-in-out "
              aria-label="Default select example"
              onChange={(e) => setSeasonSelector(e.target.selectedIndex + 1)}
            >
              {Array.from({ length: content.number_of_seasons }).map((u, i) => (
                <option
                  key={`Season_${i}`}
                  className="text-gray-700"
                >{`Season ${i + 1}`}</option>
              ))}
            </select>
          </div>
          <div className="sm:grid md:grid-cols-2 md:mr-5 xl:grid-cols-3 gap-10">
            {season?.episodes.map((episode) => (
              <div key={episode.id} className="my-6 pr-5 md:pr-0 md:my-0">
                <div className="flex items-center md:flex-col md:items-start">
                  <div className="group cursor-pointer relative w-1/2 md:w-full">
                    <PlayIcon className="absolute w-auto h-1/3 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-100" />
                    <Image
                      src={BASE_URL + episode.still_path}
                      layout="responsive"
                      width={160}
                      height={90}
                    />
                  </div>
                  <p className="ml-3 font-bold text-xs md:text-sm md:ml-0 md:mt-2">{`S${seasonSelector} E${episode.episode_number} • ${episode.name}`}</p>
                </div>
                <div className="mt-2 text-xs font-semibold md:text-sm">
                  <p>{episode.overview}</p>
                  <p className="mt-1 text-gray-400">{`${episode.runtime} min • TV • Airdate: ${episode.air_date}`}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      </TabPanel>
      <TabPanel>
        <h2>Inside the Episodes</h2>
      </TabPanel>
      <TabPanel>
        <h2>Extras</h2>
      </TabPanel>
      <TabPanel>
        <h2>You may also like</h2>
      </TabPanel>
      <TabPanel>
        <h2>Details</h2>
      </TabPanel>
    </Tabs>
  );
};

export default CustomTab;
