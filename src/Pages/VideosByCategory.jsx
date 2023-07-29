import React, { useContext } from "react";
import { useParams } from "react-router";
import Navigation from "../Components/Navigation";
import VideoCard from "../Components/VideoCard";
import { VideosContext } from "../Context/VideosContext";

const VideosByCategory = () => {
    const { videosData, videosDataLocalStorage } = useContext(VideosContext);
    const { categoryName } = useParams();

    const videosbyCategory = videosDataLocalStorage.filter(
        (videoCategory) => videoCategory.category === categoryName
    );

    return (
        <div className="home_wrapper">
            <h1>{categoryName}</h1>
            <div className="main_wrapper">
                <Navigation />
                <div className="video_category_wrapper">
                    {videosbyCategory.map((video) => (
                        <VideoCard video={video} key={video._id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideosByCategory;
