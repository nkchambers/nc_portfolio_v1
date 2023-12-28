import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const [index, setIndex] = useState(1); 
    const toRotate = ["Full-Stack Developer", "Web Designer", "Web Developer", "Frontend Developer", "React Developer"];
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisable }) =>
                            <div className={isVisable ? "animate_animated animate_fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{ `Hi I'm Nick ` }</h1>
                                <h1 className="wrap rollingText">{text}</h1>
                                <p className="aboutBio">
                                    I'm set out on a mission to help companies and organizations utilize technology to their advantage. 
                                    Whether that be to improve customer retention through better website user-experience or make a larger impact on those they serve with a resource mobile app, I'm ready to start buidling too infinity and beyond!</p>
                                <p>
                                    I'm a former catering lead turned full-stack developer. In my 10+ years of working in food service I learned how to cater to clients' individual needs with unwaivering attention to detail. 
                                    As long as the project needs are within my skill set, I will approach development in the same way and will provide that same high quality level service to my clients.
                                </p>
                                <a href="#connect"><button>Let's connect<ArrowRightCircle size={25} /></button></a>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisable }) =>
                                <div className={isVisable ? "animate_animated animate_zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}