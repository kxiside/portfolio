import "./AboutPage.css"
import sky from "../../images/sky.png"
import hjc from "../../images/hjc.png"
import react from "../../images/react.png"
import python from "../../images/python.png"

export default function AboutPage() {
  
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
           <p>Inspired to create & zealous to learn. I'm a well versed developer with a dedication to concise & fluid code. Capable of building fully funcitonal applications in several different languages.</p>
           <section className="skills">
            <img className="react" src={react} alt="React" />
            <img className="python" src={python} alt="Python" />
            <img className="hjc" src={hjc} alt="HTML, Javascript, CSS" />
           </section>
         </div>
      </div>

    </>
  );
}