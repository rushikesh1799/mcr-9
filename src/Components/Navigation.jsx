import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

const Navigation = () => {
    return (
        <nav className="navigation_wrapper">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/playlists">Playlists</NavLink>
            <NavLink to="/watch-later">Watch Later</NavLink>
        </nav>
    );
};

export default Navigation;
