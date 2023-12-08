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
      <div className="About">
        <div className="bg">
          <section className="txt">
              <h1>Software Engineer</h1>
              <p>Name: <span className="title">Kai Swendseid</span></p>
              <p>Location: <span className="title">Los Angeles, CA</span></p>
          </section>
        </div>
        <br /><br />
        <div className="container">
           <p className="container-p">
            Welcome to my page! I'm a freelance web developer and IT professional based in Los Angeles. My language/framework skills include HTML5, CSS, Javascript, Python, React, Django, PostgreSQL, AWS, and MongoDB. If you are interested in my services, <br /> please head to the contact page and send me a message!
           </p>
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
                I'm a Software Engineer with a background in sales and customer service. I have a passion for creating and building things, and I love to work in constructive group settings. I recently graduated from General Assembly's Software Engineering immersive program. This led me into freelance web development, where I'm progressing the skills needed for a  position as a developer. It's exciting to continue learning and growing my skills while working on new projects!
              </p>
              {/* make a stylish contact and project footer */}
              <Link to="/projects" className="link2">Deployments</Link>
              <Link to="/contact" className="link2">Need a website?</Link>
            </motion.div> 
            )}
          </motion.section>
        </div>
        <ParticlesComponent />
      </div>
    </>
  );
}