import React from 'react';
import Toggle from './Toggle';
import {AnimateSharedLayout} from "framer-motion";

// Style
import styled from 'styled-components';
import {About, Description, Image} from '../styles';

const FaqSection = () => {

    return (
        <Faq>
            <h2>Any questions ? <span>FAQ</span></h2>

            <AnimateSharedLayout>

                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, excepturi?</p>
                    </div>
                </Toggle>

                <Toggle title="Daily Schedules">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, excepturi?</p>
                    </div>
                </Toggle>

                <Toggle title="Different payments methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, excepturi?</p>
                    </div>
                </Toggle>

                <Toggle title="What products do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, excepturi?</p>
                    </div>
                </Toggle>

            </AnimateSharedLayout>
        </Faq>
    )
}

//Style
const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;