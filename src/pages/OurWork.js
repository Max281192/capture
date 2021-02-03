import React from "react";
import styled from 'styled-components';

//Routing
import {Link} from 'react-router-dom';
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Page animation
import {motion} from 'framer-motion';
import {pageAnimation, fade, photoAnim, lineAnim, sliderContainer, slider} from '../animation';

const OurWork = () => {
    return (
        <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">

            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>

            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete"/>
                    </Hide>
                </Link>
            </Movie>

            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="theracer"/>
                </Link>
            </Movie>

            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtime"/>
                </Link>
            </Movie>
        </Work>
    )
};

const Work = styled(motion.div)`
  //background-color: white;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  
  h2{
    color: white;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  .line {
    height: 0.35rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation for page transition
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #BFBFBF;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background-color: #808080;
`;

const Frame3 = styled(Frame1)`
  background-color: #404040;
`;

const Frame4 = styled(Frame1)`
  background-color: #1b1b1b;
`;

export default OurWork;