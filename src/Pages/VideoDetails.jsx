import React, { useContext } from "react";
import { VideosContext } from "../Context/VideosContext";
import { useNavigate, useParams } from "react-router";
import Navigation from "../Components/Navigation";
import VideoCard from "../Components/VideoCard";

import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteModal from "./Modals/EditNoteModal";
import AddNewNoteModal from "./Modals/AddNewNoteModal";

const VideoDetails = () => {
    const { videoId } = useParams();
    const {
        videosData,
        videosDataLocalStorage,
        setVideosData,
        removeFromWatchLater,
        addToWatchLater,
    } = useContext(VideosContext);
    const videoToRender = videosDataLocalStorage.find(
        (video) => video._id === Number(videoId)
    );

    const handleDelete = (note) => {
        const updatedVideosData = videosDataLocalStorage.map((video) =>
            video._id === videoToRender._id
                ? {
                      ...video,
                      notes: video.notes.filter(
                          (currentNote) => currentNote.id !== note.id
                      ),
                  }
                : video
        );
        setVideosData(updatedVideosData);
        localStorage.setItem("allVideos", JSON.stringify(updatedVideosData));
    };

    return (
        <div>
            <h1>Video Details Page</h1>
            <br />
            <div className="video_details_main_wrapper">
                <Navigation />
                <div className="video_detail_main_container">
                    <iframe
                        width="800"
                        height="450"
                        src={videoToRender.src}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="video_card_info video_details">
                        <div className="card_img_title">
                            <img
                                src="https://picsum.photos/300/46"
                                alt="tempImage"
                                className="video_provider_Image"
                            />
                            <div>
                                <span className="video_title">
                                    {videoToRender.title}
                                </span>
                            </div>
                        </div>

                        <div className="video_details_btns">
                            {videoToRender.isWatchLater ? (
                                <div
                                    // className="watch_later_btn"
                                    onClick={() =>
                                        removeFromWatchLater(videoToRender._id)
                                    }
                                >
                                    <WatchLaterIcon sx={{ color: "#509ecf" }} />
                                </div>
                            ) : (
                                <div
                                    // className="watch_later_btn"
                                    onClick={() =>
                                        addToWatchLater(videoToRender._id)
                                    }
                                >
                                    <WatchLaterOutlinedIcon />
                                </div>
                            )}
                            {
                                <div>
                                    <PlaylistAddIcon />
                                </div>
                            }
                            {
                                <div title="Add Note">
                                    <AddNewNoteModal
                                        currentvideo={videoToRender}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className="notes">My Notes:</h2>
                        {videoToRender.notes.map((note) => (
                            <div key={note.id} className="note_container">
                                <div>{note.content}</div>
                                <div className="note_container_btns">
                                    <EditNoteModal
                                        currentvideo={videoToRender}
                                        note={note}
                                    />
                                    <DeleteIcon
                                        sx={{ cursor: "pointer" }}
                                        onClick={() => handleDelete(note)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>More Videos:</h3>
                    <div className="more_videos">
                        {videosData.map((video) => (
                            <VideoCard video={video} key={video._id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;
