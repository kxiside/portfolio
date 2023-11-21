import './Main.css';
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from '../../components/Header/Header';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import sky from '../../images/sky.png';


const Main = () => {
    const ref = useRef();
    return (
        <div className="container">
            <Parallax ref={ref} pages={5}>
                <ParallaxLayer offset={0} speed={5}>
                    <Header />
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1}>
                    <Skills />
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={.1}>
                    <Projects />
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={.1}>
                    <Contact />
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={.1}>
                    <Footer />
                    <img src={sky} alt="" />
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default Main;
