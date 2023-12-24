// assets
 import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import LinkedInIcon from "../assets/LinkedIn-icon.svg";

// components
import SocialMediaIcon from '../components/SocialMediaIcon'
import Reveal from "../components/Reveal";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

// Links
import {Links} from '../Data'
import { useEffect } from "react";

const About = () => {
  useEffect(()=> {
    console.log(Links);
  }, [])
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url("${aboutPageImg}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="max-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full px-12 py-16">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              About <span className="text-secondary"> me</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sapiente repudiandae fugiat perspiciatis facilis, velit atque pariatur recusandae, beatae numquam dolore nihil dolorum laudantium ad dolorem porro rerum expedita adipisci!
            </p>
          </Reveal>
          
          <motion.div 
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}}
            className="flex items-center justify-center xl:justify-start gap-6">
            <SocialMediaIcon to={Links[0].facebookLink} imgSrc={facebookIcon} title="Facebook" />
            <SocialMediaIcon to={Links[0].githubLink} imgSrc={githubIcon} title="Github" />
            <SocialMediaIcon to={Links[0].linkedInLink} imgSrc={LinkedInIcon} title="LinkedIn" />
          </motion.div>
        </div>
        <div className="flex-1 flex items-center justify-center">
            <motion.img 
              variants={scale()}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{once: false}}
              src={aboutIllustration} 
              alt="" 
              className="max-w-full sm:max-w-[401px]"/>
          </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-[1px] bg-divider'/>
    </div>
  )
}

export default About