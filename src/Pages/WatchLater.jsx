import React, { useContext } from "react";
import { VideosContext } from "../Context/VideosContext";
import VideoCard from "../Components/VideoCard";
import Navigation from "../Components/Navigation";

import "./Styles.css"

const WatchLater = () => {
    const { videosData } = useContext(VideosContext);

    return (
        <div>
            <h1>Watch Later Page</h1>
            <div className="main_wrapper">
                <Navigation />
                <div className="video_category_wrapper">
                    {videosData
                        .filter((video) => video.isWatchLater)
                        .map((video) => (
                            <VideoCard video={video} key={video._id} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default WatchLater;
