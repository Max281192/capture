import React from "react";
import home1 from "../img/home1.png";
import Wave from './Wave';

// import styled from "styled-components";
import {About, Description, Image, Hide} from '../styles';

//Framer Motion
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from "../animation";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            true.
                        </motion.h2>
                    </Hide>
                </motion.div>

                <motion.p variants={fade}>
                    Contact us for any photography ideas that you have, we are
                    professional and amazing
                </motion.p>

                <motion.button variants={fade}>Contact us!</motion.button>
            </Description>

            <Image>
                <motion.img variants={photoAnim} src={home1} alt="cover"/>
            </Image>

            <Wave/>
        </About>
    );
};

//Styled component


export default AboutSection;
