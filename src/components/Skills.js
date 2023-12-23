import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Throughout my coding boodcamp I was exposed to varias technologies and learned how they worked together to create a full-stack web application. Since graduating and working on projects I've had the opportunity to expand that knowledge, gain new skills and improve on the core competencies I learned in the bootcamp.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="95% meter"></img>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="80% meter"></img>
                                    <h5>Back-end Develpment</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="90% meter"></img>
                                    <h5>Front-end Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="95% meter"></img>
                                    <h5>Full-stack Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="80% meter"></img>
                                    <h5>Web Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="90% meter"></img>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="95% meter"></img>
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="80% meter"></img>
                                    <h5>UI/UX Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="90% meter"></img>
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="95% meter"></img>
                                    <h5>Frontend Frameworks</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="80% meter"></img>
                                    <h5>MySQL Database</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="90% meter"></img>
                                    <h5>Mongo DB</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="95% meter"></img>
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="80% meter"></img>
                                    <h5>Flask</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="90% meter"></img>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="95% meter"></img>
                                    <h5>Software Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="80% meter"></img>
                                    <h5>ASP.NET</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="90% meter"></img>
                                    <h5>GitHub</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} alt=""/>
        </section>
    )

}