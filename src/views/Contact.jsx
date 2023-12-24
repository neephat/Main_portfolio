// assets
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";

// components
import LabelInput from "../components/LabelInput";
import CustomButton from '../components//CustomButton'

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import Reveal from "../components/Reveal";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url("${contactPageImg}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-screen-lg flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              Got a project in <span className="text-secondary"> mind?</span>
            </h2>
          </Reveal>
          
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}}
            src={contactIllustration} 
            alt="" 
            className="max-h-[348px]" 
          />
        </div>
        
          <motion.div 
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}}
            className="flex-1 flex flex-col gap-6 w-full max-w-[696px]">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <LabelInput labelText="Your Name" placeholderText="Name" />
              <LabelInput labelText="Your Email" placeholderText="Email" />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <LabelInput labelText="Your Message" placeholderText="Message" textarea />
            </div>
            <div className="flex flex-col items-center">
              <CustomButton secondary>Send Message</CustomButton>
            </div>
            

          </motion.div>

        </div>
      
      <div className='absolute bottom-0 left-0 w-full h-[1px] bg-divider'/>
    </div>
  )
}

export default Contact