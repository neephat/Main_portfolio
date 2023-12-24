// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import  CustomButton  from "../components/CustomButton";
import Card from '../components/Card'

// data
import { projects } from "../Data"

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";
import Reveal from "../components/Reveal";


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("uiUx")

  const filteredProjects = ()=> {
    if(activeCategory === "uiUx"){
      return projects.filter((item)=> item.category === "uiUx")
    } else {
      return projects.filter((item)=> item.category === "web")
    }
  }
  return (
    <div 
      id="project" 
      className="min-h-screen relative"
      style={{
        background: `url("${projectsPageImg}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-screen-2xl w-full px-12 py-16 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              My recent <span className="text-secondary"> projects</span>
            </h2>
          </Reveal>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}}
            className="flex items-center justify-center gap-4 xl:justify-start flex-col sm:flex-row">
            <CustomButton 
              secondary={activeCategory === 'uiUx' ? true : false}
              onClick={()=>setActiveCategory("uiUx")}  
            >
              UI/UX
            </CustomButton>
            <CustomButton 
              secondary={activeCategory === 'web' ? true : false}
              onClick={()=>setActiveCategory("web")}  
            >
              Web Design
            </CustomButton>
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}}
            className="flex flex-wrap justify-center mt-12 gap-12">
            {filteredProjects().map((item)=> (
              <Card key={item.id} imgSrc={item.img} title={item.title} />
            ))}
          </motion.div>

        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-[1px] bg-divider'/>
    </div>
  )
}

export default Projects