import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import EditNoteIcon from "@mui/icons-material/EditNote";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";
import { VideosContext } from "../../Context/VideosContext";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const AddNewNoteModal = ({ currentvideo }) => {
    const [newNote, setNewNote] = React.useState({
        id: currentvideo.notes.length + 1,
        content: "",
    });

    const { videosData, videosDataLocalStorage, setVideosData } =
        React.useContext(VideosContext);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const condition = newNote.content === "";

    const handleSubmit = () => {
        if (condition) {
            alert("Kindly please fill in all the details");
        } else {
            const newVideosData = videosDataLocalStorage.map((video) =>
                video._id === currentvideo._id
                    ? {
                          ...video,
                          notes: [...video.notes, { ...newNote }],
                      }
                    : video
            );
            // console.log(newVideosData);

            setVideosData(newVideosData);
            localStorage.setItem("allVideos", JSON.stringify(newVideosData));
            handleClose();
        }
    };

    return (
        <div>
            <EditNoteIcon sx={{ cursor: "pointer" }} onClick={handleOpen} />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Add New Note:
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        component="div"
                    >
                        <div className="form_input">
                            <label htmlFor="note_content">Content:</label>
                            <TextField
                                id="filled-basic note_content"
                                variant="outlined"
                                required
                                size="small"
                                multiline
                                value={newNote.content}
                                onChange={(e) =>
                                    setNewNote((prev) => ({
                                        ...prev,
                                        content: e.target.value,
                                    }))
                                }
                                sx={{ width: "80%" }}
                            />
                        </div>
                    </Typography>
                    <Typography
                        id="modal-modal-footer"
                        sx={{
                            mt: 2,
                            display: "flex",
                            gap: "1rem",
                            justifyContent: "center",
                        }}
                        component="div"
                    >
                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            size="small"
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            Update
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default AddNewNoteModal;
