import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.svg";
import NC_logo from '../assets/img/NC_logo.jpg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailChimpForm /> */}
                    <Col size={12} sm={6}>
                        <a href="#home"><img src={NC_logo} style={{ width: "20%", height: "auto", marginTop: "30px" }} alt="Logo" className='ncLogo' /></a>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        {/* <div className="social-icon">
                            <a href="https://www.linkedin.com/in/nick-chambers-0a391241/"><img src={navIcon1} alt="Linkedln Icon" /></a>
                            <a href="https://www.facebook.com/nick.chambers.370"><img src={navIcon2} alt="Facebook Icon" /></a>
                            <a href="https://www.instagram.com/chambers9565/"><img src={navIcon3} alt="Instagram Icon" /></a>
                        </div> */}
                        <p className="pt-5">Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}