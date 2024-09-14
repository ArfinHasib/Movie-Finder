import { useState } from 'react'
import './App.css';
import Search from "/assets/search.png"
import MovieCard from './MovieCard';

// API URL from OMDB
const API_URL = 'https://omdbapi.com?apikey=44a7042f'

function App() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    return (
        <>
            <div className="app">
                <h1>Movie Finder</h1>
                <div className="search">
                    <input
                        placeholder="Search Here..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <img
                        src=
                        {Search}
                        alt="search icon"
                        onClick={() => searchMovies(searchTerm)}
                    />
                </div>

                {movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie, index) => (
                            <MovieCard key={index} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>Search for your favorite movies & TV Series</h2>
                    </div>
                )}
            </div>
        </>
    )
}

export default App
