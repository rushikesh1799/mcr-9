import { createContext, useEffect, useState } from "react";
import { categories } from "../DB/VideoCategories";
import { videos } from "../DB/VideosData";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
    const [categoriesData, setCategoriesData] = useState(categories);
    const [videosData, setVideosData] = useState(videos);

    const [videosDataLocalStorage, setVideosDataLocalStorage] = useState(
        JSON.parse(localStorage.getItem("allVideos"))
    );

    if (!localStorage.getItem("allVideos")) {
        localStorage.setItem("allVideos", JSON.stringify(videosData));
    }

    useEffect(() => {
        setVideosDataLocalStorage(
            JSON.parse(localStorage.getItem("allVideos"))
        );
        console.log("videosDataLocalStorage", videosDataLocalStorage);
    }, [videosData]);

    useEffect(() => {
        console.log("videosData", videosData);
    }, [videosData]);

    const addToWatchLater = (videoId) => {
        const updatedVideosData = videosData.map((video) =>
            video._id === Number(videoId)
                ? { ...video, isWatchLater: true }
                : video
        );
        setVideosData(updatedVideosData);
        localStorage.setItem("allVideos", JSON.stringify(updatedVideosData));
    };
    const removeFromWatchLater = (videoId) => {
        const updatedVideosData = videosData.map((video) =>
            video._id === Number(videoId)
                ? { ...video, isWatchLater: false }
                : video
        );
        setVideosData(updatedVideosData);
        localStorage.setItem("allVideos", JSON.stringify(updatedVideosData));
    };

    return (
        <VideosContext.Provider
            value={{
                categoriesData,
                videosData,
                videosDataLocalStorage,
                setVideosData,
                addToWatchLater,
                removeFromWatchLater,
                setVideosDataLocalStorage,
            }}
        >
            {children}
        </VideosContext.Provider>
    );
};
