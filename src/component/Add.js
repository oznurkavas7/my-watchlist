import React, { useState } from "react";
import ResultCart from './ResultCart';

const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    function onChange(e) {
        setQuery(e.target.value);

        //Fetch ile veri alınacak
        //then ile alınan veri res'e atandı
        //res json'a döndürülecek
        fetch(` 
        https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_KEY}&query=${e.target.value}&include_adult=false&language=en-US&page=1`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results)
                }
                else {
                    setResults([]);
                }
            });
    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" alt=""></img>
                    <div className="titles">
                        <h1>Hoşgeldiniz</h1>
                        <h2>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h2>
                    </div>
                    <div className="input-wrapper">
                        <input type="text"
                            value={query}
                            onChange={onChange}
                            placeholder="Film, dizi, kişi ara..."></input>
                    </div>
                    {results.length > 0 && (
                        <ul className="results">{results.map((movie) => (
                            <li key={movie.id}>
                                <ResultCart movie={movie}></ResultCart>
                            </li>
                        ))}</ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Add;