import { Row } from "react-bootstrap";

export default function ProjectCard ({ title, style, description, img, link }) {
    const a = {link}
    return (
        <Row size={10} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={img} />
          <a href={link}>
            <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <p>{style}</p>
          </div>
          </a>
        </div>
      </Row>
    )
}