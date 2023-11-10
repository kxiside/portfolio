import { Row } from "react-bootstrap";

export default function ProjectCard ({ title, description, img }) {

    return (
        <Row size={10} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={img} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Row>
    )
}