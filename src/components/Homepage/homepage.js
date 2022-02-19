import React from "react";
import  "./homepage.css"
import Hero from '../../components/Hero/hero';
import Lore from '../../components/Lore/lore';
import Artist from '../../components/Artist/artist';
import Crew from '../../components/Crew/crew';
// import Roadmap from '../../components/Roadmap/roadmap';
import Faqs from '../../components/Faqs/faqs';
import Footer from '../../components/Footer/footer';

import Nav from '../../components/Nav/nav';


const Homepage = () => {
    return (
        <div className="homepage">
            <Nav />
            <Hero />
            <Lore />
            {/* <Artist /> */}
            <Crew />
            {/* <Roadmap /> */}
            <Faqs />
            <Footer />
        </div>
    )
}

export default Homepage
