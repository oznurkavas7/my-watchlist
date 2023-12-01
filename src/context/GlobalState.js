import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from './AppReducer';

export const GlobalContext = createContext();

//başlangıç değeri
const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],//localstorage'de deger varsa JS'e cevir goster, yoksa boş array yolla
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],//localstorage'de deger varsa JS'e cevir goster, yoksa boş array yolla
}

export const GlobalProvider = (props) => { //props => aşagıdakı elemanların hepsini almak ıcın
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //local stroge
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist)); //watchlist'i json'a cevirip localstorage'e atmak
        localStorage.setItem("watched", JSON.stringify(state.watched)); //watchlist'i json'a cevirip localstorage'e atmak

    }, [state])

    const addMovieToWatchList = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    };

    const removeMovieFromWatchList = (id) => {
        dispatch({ type: "REMOVE_MOVIE_TO_WATCHLIST", payload: id })
    };

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie })
    };

    const moveToWatchlist = (movie) => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie })
    };

    const removeMovieFromWatched = (id) => {
        dispatch({ type: "REMOVE_MOVIE_TO_WATCHED", payload: id })
    };

    //parent kapsayıcı
    return (
        <GlobalContext.Provider value={ //parents kapsayıcı
            {
                watchlist: state.watchlist, //projede istenılen yerde kullanılabilinir,
                watched: state.watched,
                addMovieToWatchList,
                removeMovieFromWatchList,
                addMovieToWatched,
                moveToWatchlist,
                removeMovieFromWatched
            }

        }>
            {props.children}
        </GlobalContext.Provider>
    );
}
