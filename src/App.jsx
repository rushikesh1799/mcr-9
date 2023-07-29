import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import VideosListing from "./Pages/VideosListing";
import VideoDetails from "./Pages/VideoDetails";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Playlists from "./Pages/Playlists";
import VideosByCategory from "./Pages/VideosByCategory";
import WatchLater from "./Pages/WatchLater";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/videos" element={<VideosListing />}></Route>
                <Route
                    path="/videos/:categoryName"
                    element={<VideosByCategory />}
                ></Route>
                <Route path="/explore" element={<Explore />}></Route>
                <Route path="/watch-later" element={<WatchLater />}></Route>
                <Route path="/playlists" element={<Playlists />}></Route>
                <Route path="/video/:videoId" element={<VideoDetails />}></Route>
            </Routes>
        </>
    );
}

export default App;
