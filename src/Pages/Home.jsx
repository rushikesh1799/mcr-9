import React, { useContext } from "react";
import { VideosContext } from "../Context/VideosContext";

import "./Styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import Navigation from "../Components/Navigation";

const Home = () => {
    const { categoriesData } = useContext(VideosContext);

    const navigate = useNavigate();

    return (
        <div className="home_wrapper">
            <h1>Categories:</h1>
            <div className="main_wrapper">
                <Navigation />

                <div className="categories_wrapper">
                    {categoriesData.map((category) => (
                        <div
                            key={category._id}
                            onClick={() =>
                                navigate(`/videos/${category.category}`)
                            }
                        >
                            <img
                                src={category.thumbnail}
                                alt={category.category}
                            />
                            <p>{category.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
