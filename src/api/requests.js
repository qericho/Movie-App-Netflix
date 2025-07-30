
const api_Key = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
    fetchToprated: `/movie/top_rated?api_key=${api_Key}`,
    fetchPopular: `/tv/popular?api_key=${api_Key}`,
    fetchUpcoming: `/movie/upcoming?api_key=${api_Key}`,
    fetchNowPlaying: `/movie/now_playing?api_key=${api_Key}`,
    fetchTrendingAll: `https://api.themoviedb.org/3/trending/all/week?api_key=${api_Key}`
}

export default requests