import "./Home.css"
import { Container, Row, Col, Tab } from "react-bootstrap"
import ProjectCard from "../../components/ProjectCard"
import gymgrid from "../../images/gymgridss.png"
import supersports from "../../images/superss.png"
import star from "../../images/starss.png"
import { animate, motion } from "framer-motion"
import ParticlesComponent from "../../components/Particles/Particles"

export default function HomePage() {
    const projects = [
        {
          title: "Gym Grid",
          style: "Team-project",
          description: "Python/Django/CSS/AWS",
          img: gymgrid,
          siteLink: "https://gymgrid.onrender.com/",
          gitLink: "https://github.com/kxiside/gym_grid"
        },
        {
            title: "SuperSportsUnltd.",
            style: "Solo-project",
            description: "HTML5/CSS/Javascript/Node/Express/Mongodb",
            img: supersports,
            siteLink: "https://supersports.fly.dev/",
            gitLink: "https://github.com/kxiside/SuperSportsUnltd"
        },
        {
            title: "Starsweeper",
            style: "Solo-project",
            description: "HTML5/CSS/Javascript",
            img: star,
            siteLink: "https://kxiside.github.io/starsweeper/",
            gitLink: "https://github.com/kxiside/starsweeper"
        },
    ]

    const variants = {
      initial: {
        y: 500,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          staggerChildren: 0.1,
        },
      },
    }
    return (
        <motion.section className="project" id="projects" variants={variants} initial="initial" whileInView="animate">
        <motion.Container variants={variants}>
          <motion.Row variants={variants}>
            <Col size={12}>
                <motion.div variants={variants}>
                  <motion.p className="project-txt" variants={variants}></motion.p>
                  <Tab.Container className="container">
                    <Tab.Content>
                      <Tab.Pane>
                        <motion.Col className="proj" variants={variants}>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </motion.Col>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </motion.div>
            </Col>
          </motion.Row>
          <ParticlesComponent className="particle"/>
        </motion.Container>
      </motion.section>
    )
}