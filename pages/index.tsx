import React from "react";

//Components
import Navbar from "../components/page/Navbar";
import Hero from "../components/page/Hero";
import Join from "../components/page/Join";
import Footer from "../components/page/Footer";
import Features from "../components/page/Features";
import Team from "../components/page/Team";
import FAQ from "../components/page/FAQ";
import ServiceItems from "../components/page/ServiceItems";


const Index = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Join />
            <ServiceItems />
            <Features />
            {/*<Team />*/}
            <FAQ />
            <Footer />
        </>
    );
};

export default Index;
