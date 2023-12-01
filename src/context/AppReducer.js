export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,//state değerinin hepsini al
                watchlist: [...state.watchlist, action.payload], //action: gonderilen değeri ekle, yeni array oluştur
            };
        case "REMOVE_MOVIE_TO_WATCHLIST":
            return {
                ...state,//state değerinin hepsini al
                watchlist: state.watchlist.filter((movie) => movie.id !== action.payload), //eşit olmayanı geri döndür, eşit olanı atıyor (silme işlemi)
            };
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,//state değerinin hepsini al
                watchlist: state.watchlist.filter((movie) => movie.id !== action.payload.id), //eşit olmayanı geri döndür, eşit olanı atıyor (silme işlemi)
                watched: [...state.watched, action.payload]
            };
        case "MOVE_TO_WATCHLIST":
            return {
                ...state,//state değerinin hepsini al
                watched: state.watched.filter((movie) => movie.id !== action.payload.id), //eşit olmayanı geri döndür, eşit olanı atıyor (silme işlemi)
                watchlist: [...state.watchlist, action.payload]
            };
        case "REMOVE_MOVIE_TO_WATCHED":
            return {
                ...state,//state değerinin hepsini al
                watched: state.watched.filter((movie) => movie.id !== action.payload), //eşit olmayanı geri döndür, eşit olanı atıyor (silme işlemi)
            };


        default:
            return state;
    }
}