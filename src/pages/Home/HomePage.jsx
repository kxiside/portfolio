import "./Home.css"
import { Container, Row, Col, Tab } from "react-bootstrap"
import ProjectCard from "../../components/ProjectCard"
import gymgrid from "../../images/gymgridss.png"
import supersports from "../../images/superss.png"
import star from "../../images/starss.png"

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
    return (
        <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
                <div>
                  <h2>Full Stack Developer</h2>
                  <p className="project-txt">Welcome to my personnel website! Here you will find my completed work. Feel free to navigate and check out the about me and contact page with my social link.</p>
                  <Tab.Container className="container">
                    <Tab.Content>
                      <Tab.Pane>
                        <Col className="proj">
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
                        </Col>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
            </Col>
          </Row>
        </Container>
        <img className="BG" ></img>
      </section>
    )
}