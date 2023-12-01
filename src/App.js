import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import "./lib/fontawesome/css/all.min.css"
import Header from './component/Header';
import Watchlist from './component/Watchlist';
import Watched from './component/Watched';
import Add from './component/Add';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Watchlist />}></Route>
          <Route path="/watched" element={<Watched />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
