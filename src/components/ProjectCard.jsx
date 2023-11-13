import { Row } from "react-bootstrap";
import gitLogo from "../images/github-mark.png"

export default function ProjectCard ({ title, style, description, img, siteLink, gitLink }) {
    
    return (
        <Row size={10} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={img} />
          <a href={siteLink}>
            <div className="proj-txtx">
              <h4>{title}</h4>
                <p>{style}</p>
                <p>{description}</p>
              <a className="gitLink" href={gitLink}><img className="gitImg" src={gitLogo} /></a>
            </div>
          </a>
        </div>
      </Row>
    )
}