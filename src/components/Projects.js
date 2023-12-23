import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import LightsHome1 from "../assets/img/LightsHome1.gif";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "CNC AUTO",
            description: "Car Rental and Sales",
            img: LightsHome1,
            imgURL: "http://35.91.128.202//",
            gitHubURL: "https://github.com/nkchambers/cncauto_v2_deployment"
        },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     img: projImg2,
        //     imgURL: "",
        //     gitHubURL: ""
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     img: projImg3,
        //     imgURL: ''
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     img: projImg1,
        //     imgURL: ''
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     img: projImg2,
        //     imgURL: ''
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     img: projImg3,
        //     imgURL: ''
        // },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>I'm a passionate car enthusiast so after graduating I set out to create a car rental web application using the MERN stack. Since graduting I learned new frameworks, libraries, AWS EC2 configuration and have succussfully implemented these new technologies in my car rental app. Many more projects on the way!   </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
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
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>E-Commerce Projects Coming Soon!</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Mobile App Projects Coming Soon!</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    )
}
