import React from 'react';
import Landing from "../components/Landing";
import Highlights from "../components/highlights";
import Featured from "../components/featured";
import Discounted from "../components/discounted";
import Explore from '../components/explore';


const Home = () => {
    return (
        <>
            <Landing />
            <Highlights />
            <Featured />
            <Discounted />
            <Explore />
        </>
    );
}

export default Home;
