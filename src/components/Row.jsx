import useFetchMovie from "../hooks/useFetchMovie";
import useExpandable from "../hooks/useExpandable";

const Row = ({ title, req, isLarge }) => {
    const { movies, loading, error } = useFetchMovie(req, false);
    const { expandedId, handleToggle, containerRef } = useExpandable();

    const truncate = (str, maxLength) => {
        if (!str) return "";
        return str.length > maxLength ? str.slice(0, maxLength - 1) + "…" : str;
    };

    if (loading) return <div className="text-white text-center"></div>;
    if (error) return <div className="text-red-500 text-center">Failed to fetch movies.</div>;

    return (
        <>
            {/* Title */}
            <h1 className="text-[20px] md:text-2xl text-white font-semibold py-5 md:py-10 px-8">{title}</h1>
            {/* Movie Card */}
            <div
                ref={containerRef}
                className="container mx-auto md:px-0 px-2 w-full flex overflow-x-auto scrollbar-hidden space-x-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {movies.map((movie) => {
                    const movieTitle = movie?.name || movie?.title || movie?.original_name || "Untitled";
                    const isExpanded = expandedId === movie.id;

                    return (
                        <div
                            key={movie?.id}
                            className={`group ${isLarge ? "w-[150px]  md:-w[130px] md:min-w-[150px] h-[210px] md:h-[230px]"
                                : "w-[200px] md:w-[230px] md:min-w-[130px] h-[130px] md:h-[130px]"} flex-shrink-0
                                 cursor-pointer relative overflow-auto hover:scale-95 duration-300 ease-in-out`}>
                            {/* Overlay */}
                            <div className="h-full w-full absolute top-0 left-0 group-hover:bg-black/0 bg-black/50 duration-300 ease-in-out"></div>

                            {/* Image */}
                            <img
                                className="w-full h-full object-cover"
                                src={isLarge ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                                    : `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                                alt={movieTitle}
                            />

                            {/* Title */}
                            <p
                                onClick={() => handleToggle(movie.id)}
                                className="absolute bottom-2 left-2 text-white font-semibold text-sm px-2 py-1 rounded group-hover:opacity-70 transition-opacity duration-300"
                            >
                                {isExpanded ? movieTitle : truncate(movieTitle, 20)}
                            </p>
                        </div>

                    );
                })}
            </div>
        </>
    );
};

export default Row;
