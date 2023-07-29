import React, { useContext, useEffect, useState } from "react";

import VideoCard from "../Components/VideoCard";
import Navigation from "../Components/Navigation";
import { VideosContext } from "../Context/VideosContext";

const Explore = () => {
    const { videosData, videosDataLocalStorage } = useContext(VideosContext);

    const [searchedText, setSearchedText] = useState("");
    const searchedData = videosDataLocalStorage.filter(({ title }) =>
        title.toLowerCase().includes(searchedText.toLowerCase())
    );

    const SearchHandler = (e) => {
        setSearchedText(e.target.value);
    };

    return (
        <div>
            <h1>Explore Page</h1>
            <div className="main_wrapper">
                <Navigation />
                <div className="explore_main_container">
                    <div className="search_container">
                        <input
                            type="search"
                            placeholder="Search video by title"
                            onChange={SearchHandler}
                        />
                    </div>
                    <div className="video_category_wrapper">
                        {searchedData.map((video) => (
                            <VideoCard video={video} key={video._id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
