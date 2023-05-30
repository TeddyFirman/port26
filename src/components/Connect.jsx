import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { github, linkedin, wa, fb } from '../assets';

import { experiences } from '../constants';
import { textVariant } from '../utils/motion';

const Connect = () => {

    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>
                    Connect Me:
                    <span className="flex">
                        <a href="https://github.com/TeddyFirman" target="_blank" rel="noopener noreferrer">
                            <img
                                src={github}
                                alt="github"
                                className="w-[72px] h-[72px] object-contain mr-2"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/teddyfirman/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={linkedin}
                            alt="linkedin"
                            className="w-[57px] h-[72px] object-contain mr-3"
                        />
                        </a>
                        <a href="https://web.facebook.com/teddy.thecell" target="_blank" rel="noopener noreferrer">
                        <img
                            src={fb}
                            alt="fb"
                            className="w-[67px] h-[72px] object-contain"
                        />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=6282244599770" target="_blank" rel="noopener noreferrer">
                        <img
                            src={wa}
                            alt="wa"
                            className="w-[87px] h-[72px] object-contain"
                        />
                        </a>
                    </span>
                </h2>
            </motion.div>
        </>
    )
}

export default SectionWrapper(Connect, "connect")