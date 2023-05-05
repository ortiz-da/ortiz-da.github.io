// https://getbootstrap.com/docs/4.0/components/navbar/#brand
import React from "react";
import {Link, useLocation} from "react-router-dom";

const Navigation = () => {

    const pathName = useLocation().pathname;


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 mt-3 rounded">
            <Link to={"/"} className="navbar-brand" href="#">
                <i className={"fa-solid fa-cat"}></i> Dario Ortiz
            </Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to={"/"} className={`nav-item nav-link ${pathName === "/" ? "active" : ""}`}><i
                        className="fa-solid fa-house"></i> Home</Link>
                    <Link to={"/about"} className={`nav-item nav-link ${pathName === "/about" ? "active" : ""}`}><i
                        className="fa-solid fa-user"></i> About</Link>
                    <Link to={"/games"} className={`nav-item nav-link ${pathName === "/games" ? "active" : ""}`}><i
                        className={"fas fa-gamepad"}></i> Games</Link>
                    <Link to={"/writing"}
                          className={`nav-item nav-link ${pathName.includes("/writing") ? "active" : ""}`}><i
                        className="fa-solid fa-pencil"></i> Writing</Link>
                    <Link to={"/videos"} className={`nav-item nav-link ${pathName === "/videos" ? "active" : ""}`}><i
                        className="fa-brands fa-youtube"></i> Videos</Link>
                    <Link to={"/design"} className={`nav-item nav-link ${pathName === "/design" ? "active" : ""}`}><i
                        className="fa-solid fa-pen-ruler"></i> Design</Link>

                </div>
            </div>
        </nav>
    )
}

export default Navigation