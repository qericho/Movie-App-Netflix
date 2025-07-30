import { FaPlay } from "react-icons/fa";
import requests from "../api/requests";
import useFetchMovie from "../hooks/useFetchMovie";
const baseURL = `https://image.tmdb.org/t/p/original/`;

const Banner = () => {
  const { movies, loading, error } = useFetchMovie(requests.fetchPopular, true);

  const truncate = (str, maxLength) => {
    if (!str) return "";
    return str.length > maxLength ? str.slice(0, maxLength - 1) + "…" : str;
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Failed to fetch movie.</div>;

  return (
    <div className="h-[450px] md:h-[600px] bg-cover! bg-center! relative"
      style={{ background: `url(${baseURL}${movies?.backdrop_path})` }}>
      {/* Overlay */}
      <div className='inset-0 absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black z-[1]' ></div>

      {/* Content */}
      <div className='pt-20 md:pt-10 px-5 md:px-10 flex flex-col justify-center gap-y-5 md:gap-y-8 h-full w-full lg:w-[600px] text-white z-[2] relative'>
        <h1 className='text-2xl md:text-4xl'>{movies.name || movies.title}</h1>
        <div className='flex items-center space-x-2.5'>
          <button className='w-[100px] md:w-[150px] h-[40px] text-[14px] md:text-[18px] bg-gray-900 font-semibold cursor-pointer'>
            My List</button>
          <button
            className='w-[100px] md:w-[150px] h-[40px] text-[14px] md:text-[18px] flex items-center justify-center gap-x-2.5
                bg-none font-semibold cursor-pointer'>
            Play<FaPlay />
          </button>
        </div>
        <p className='text-[15px] md:text-[18px]'>{truncate(movies.overview, 150)}</p>
      </div>
    </div>
  );
};

export default Banner;
