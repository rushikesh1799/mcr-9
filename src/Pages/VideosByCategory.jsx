import React, { useContext } from "react";
import { useParams } from "react-router";
import { videos } from "../DB/VideosData";
import Navigation from "../Components/Navigation";
import VideoCard from "../Components/VideoCard";

const VideosByCategory = () => {
    const { categoryName } = useParams();

    const videosbyCategory = videos.filter(
        (videoCategory) => videoCategory.category === categoryName
    );

    console.log("videosbyCategory", videosbyCategory);

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
