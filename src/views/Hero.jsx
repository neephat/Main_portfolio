//assets
import homeImg from '../assets/home-page.svg'
import homePageIllustation from "../assets/hero-illustration.svg";
 import downloadIcon from "../assets/download-btn-icon.svg";

// // components
import CustomButton from '../components/CustomButton'

// // react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";


// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";


const Hero = () => {
  
  return (
    <div id="home" className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url("${homeImg}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between justify-center items-center xl:items-start gap-12 w-full px-12 py-16">
        <div className="w-full xl:w-fit">
            <motion.h1
              variants={fadeIn("down")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{once: false}}
              className='w-full xl:w-fit text-center py-12 xl:text-start text-3xl sm:text-5xl lg:text-7xl font-bold text-textPrimary uppercase'>
              Creative
              <br />
              <span className='text-secondary'>
                <Typewriter words={["Web Wizard", "Full Stack Developer"]} cursor cursorStyle="_" typeSpeed={250} deleteSpeed={150} loop/>
              </span>
            </motion.h1> 

            <motion.div 
              variants={fadeIn("up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{once: false}}
              className='my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start'>
              <CustomButton secondary>Hire Me</CustomButton>
              <CustomButton icon={downloadIcon}>Download CV</CustomButton>
            </motion.div>
          </div>
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}}
            src={homePageIllustation} 
            alt='' 
            className='max-w-full sm:max-w-[401px]'/>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-[1px] bg-divider'/>
    </div>
  )
}

export default Hero
