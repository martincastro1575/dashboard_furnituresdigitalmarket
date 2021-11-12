import React from "react";
import Topbar from "../Topbar/Topbar";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer";

import './AboutUs.css'

function AboutUs() {

    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar />
                <NavMenu />
                <Footer />
            </div>
        </div>
    );
}

export default AboutUs;
