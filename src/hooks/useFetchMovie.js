import { useEffect, useState } from 'react';
import axios from '../api/axios';

const useFetchMovie = (fetchUrl, isRandom = true) => {
    const [movies, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(fetchUrl);
                const results = response.data.results;

                if (isRandom) {
                    const randomMovie = results[Math.floor(Math.random() * results.length)];
                    setMovie(randomMovie);
                } else {
                    setMovie(results);
                }
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [fetchUrl, isRandom]);

    return { movies, loading, error };
};

export default useFetchMovie;
