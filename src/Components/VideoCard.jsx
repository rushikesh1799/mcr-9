import React, { useContext } from "react";

import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";

import "./styles.css";
import { VideosContext } from "../Context/VideosContext";
import { useNavigate } from "react-router";

const VideoCard = ({ video }) => {
    const { addToWatchLater, removeFromWatchLater } = useContext(VideosContext);

    const navigate = useNavigate();

    return (
        <div key={video._id} className="video_card_container">
            <img
                src={video.thumbnail}
                alt={video.creator}
                onClick={() => navigate(`/video/${video._id}`)}
                className="video_thumbnail"
            />
            <div
                onClick={() => navigate(`/video/${video._id}`)}
                className="video_card_info"
            >
                <img
                    src="https://picsum.photos/300/46"
                    alt="tempImage"
                    className="video_provider_Image"
                />
                <div>
                    <span className="video_title">{video.title}</span>
                    <div className="views_creator">
                        <span>
                            {video.views} views | {video.creator}
                        </span>
                    </div>
                </div>
            </div>

            {video.isWatchLater ? (
                <div
                    className="watch_later_btn"
                    onClick={() => removeFromWatchLater(video._id)}
                >
                    <WatchLaterIcon sx={{ color: "#509ecf" }} />
                </div>
            ) : (
                <div
                    className="watch_later_btn"
                    onClick={() => addToWatchLater(video._id)}
                >
                    <WatchLaterOutlinedIcon />
                </div>
            )}
        </div>
    );
};

export default VideoCard;
