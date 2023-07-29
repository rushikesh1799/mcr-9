import { createContext, useEffect, useState } from "react";
import { categories } from "../DB/VideoCategories";
import { videos } from "../DB/VideosData";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
    const [categoriesData, setCategoriesData] = useState(categories);
    const [videosData, setVideosData] = useState(videos);

    useEffect(() => {
        console.log(videosData);
    }, [videosData]);

    const addToWatchLater = (videoId) => {
        const updatedVideosData = videosData.map((video) =>
            video._id === videoId ? { ...video, isWatchLater: true } : video
        );
        setVideosData(updatedVideosData);
    };
    const removeFromWatchLater = (videoId) => {
        const updatedVideosData = videosData.map((video) =>
            video._id === videoId ? { ...video, isWatchLater: false } : video
        );
        setVideosData(updatedVideosData);
    };

    return (
        <VideosContext.Provider
            value={{
                categoriesData,
                videosData,
                setVideosData,
                addToWatchLater,
                removeFromWatchLater,
            }}
        >
            {children}
        </VideosContext.Provider>
    );
};
