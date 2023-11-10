import "./Home.css"
import { Container, Row, Col, Tab } from "react-bootstrap"
import ProjectCard from "../../components/ProjectCard"
import gymgrid from "../../images/gymgridss.png"
import supersports from "../../images/superss.png"
import star from "../../images/starss.png"
import TrackVisibility from 'react-on-screen'

export default function HomePage() {
    const projects = [
        {
          title: "Gym Grid",
          description: "Python/Django",
          img: gymgrid
        },
        {
            title: "SuperSportsUnltd.",
            description: "HTML5/CSS/Javascript/Node/Express/Mongodb",
            img: supersports
        },
        {
            title: "Starsweeper",
            description: "HTML5/CSS/Javascript",
            img: star
        },
        
    ]
    return (
        <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" className="container" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first"d>
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
                }
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" ></img>
      </section>
    )
}