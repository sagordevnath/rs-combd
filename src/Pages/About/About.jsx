import React from 'react';
import "./About.css";
import AboutBanner from './AboutBanner';
import AboutTwo from './AboutTwo';
import MissionVision from './MissionVision';
import Testimonial from '../Home/Testimonial';

const About = () => {
    return (
        <div>
            <AboutBanner/>
            <AboutTwo/>
            <MissionVision/>
            <Testimonial/>
        </div>
    );
};

export default About;