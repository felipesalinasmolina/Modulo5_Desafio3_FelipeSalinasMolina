import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import Details from "./views/Details";
import NotFounds from "./views/NotFounds";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<Details />} />
        <Route path="*" element={<NotFounds />} />
      </Routes>
    </div>
  );
}

export default App;
