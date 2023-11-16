import "./AboutPage.css"
import { motion } from "framer-motion"
import sky from "../../images/sky.png"
import hjc from "../../images/hjc.png"
import react from "../../images/react.png"
import python from "../../images/python.png"
import ParticlesComponent from "../../components/Particles/Particles"
import { useState } from "react"
import ContactPage from "../Contact/ContactPage"
import { Link } from "react-router-dom"

export default function AboutPage() {
  
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="app">
        <div className="bg">
          <section className="txt">
              <h1>Full Stack Developer</h1>
              <p>Name: <span className="title">Kai Swendseid</span></p>
              <p>Location: <span className="title">Los Angeles, CA</span></p>
          </section>
        </div>
        <div className="container">
           <p className="container-p">Inspired to create & zealous to learn. I'm a well versed developer with a dedication to concise & fluid code. Capable of building fully funcitonal applications in several different languages.</p>
           <section className="skills">
            <img className="react" src={react} alt="React" />
            <img className="python" src={python} alt="Python" />
            <img className="hjc" src={hjc} alt="HTML, Javascript, CSS" />
           </section>
          <motion.section transition={{layout: { duration: 1, type: "spring" } }} layout onClick={() => setOpen(!open)} className="card">
            <motion.h3 layout="position">About Me</motion.h3>
            { open && (
            <motion.div className="body">
              <p className="body-txt">
                Raised in California with a pursuit of the outdoors has always included technology to document my experiences. Over a decade of videoggaphy experience using Adobe programs as well as professional retail & customer service expertise leaves me adaptable to any type of work enviroment.
                I graduated at General Assembly in the Software Engineering Immersive to create a solid foundation & learn best practices. 
              </p>
            </motion.div> 
            )}
          </motion.section>
          <div className="card2">
          <Link to="/contact">
              Contact
          </Link>
            <a>
              Projects
            </a>
          </div>
        </div>
      </div>
      <ParticlesComponent />
    </>
  );
}