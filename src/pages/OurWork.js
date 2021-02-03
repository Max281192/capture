import React from "react";
import styled from 'styled-components';

//Routing
import {Link} from 'react-router-dom';
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete"/>
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

const Work = styled.div`
  //background-color: white;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  
  h2{
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  
  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  
  .line{
    height: 0.5rem;
    background-color: #cccccc;
    margin-bottom: 3rem;
  }
`;

export default OurWork;