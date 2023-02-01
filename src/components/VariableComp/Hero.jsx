import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import Artists from "./Artists";
import Favourites from "./Favourites";
import Genre from "./Genre";

function Hero() {
    return(
        <div className="hero">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/genre" element={<Genre />}/>
                <Route path="/artists" element={<Artists />}/>
                <Route path="/favourites" element={<Favourites />}/>
            </Routes>
        </div>
    )
}

export default Hero;