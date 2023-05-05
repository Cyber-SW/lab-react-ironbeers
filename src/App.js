import './App.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NewBeerPage from "./components/pages/NewBeerPage";
import RandomBeerPage from "./components/pages/RandomBeerPage";
import Beers from "./components/pages/Beers";
import BeerDetails from "./components/pages/BeerDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
