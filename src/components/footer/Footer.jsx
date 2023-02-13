import React from 'react'
import "./footer.css"
import { Row, Col } from "react-bootstrap";
import Facebook from '../../images/facebook.png';
import Instagram from '../../images/instagram.png';
import Twitter from '../../images/twitter.png';

export default function footer() {
    return (
        <div className='footer' >
            <Row style={{ margin: "0.95%", padding: "1%" }}>
                <Col>
                    <div >
                        <span className='footerlogo'><span className='blueFont1'>Metro</span>way</span>
                    </div>
                </Col>
                <Col>
                    <span className='footertext'>Planning your next trip?</span><br />
                    <span className='footersubscribe'>Subscribe to our newsletter. Get the latest travel trends & deals!</span>

                </Col>
                <Col><input className='inputstyle1' type="email" placeholder='Enter Email ID' /></Col>
            </Row>
            <div>
                <ul class=" d-flex" >
                    <li >
                        <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">About us</a>

                    </li>
                    <li>
                        <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">Mobile</a>

                    </li>
                    <li>
                        <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">Privacy</a>

                    </li>
                    <li>
                        <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">Terms of use</a>

                    </li>
                    <li>
                        <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">Career</a>

                    </li>
                    <li>
                        <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">Customer Service</a>

                    </li>
                    <div className='iconsstyle d-flex'>
                        <li >
                            <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">
                                <img src={Facebook} alt="facebook" />
                            </a>
                        </li>
                        <li style={{ paddingLeft: "20%" }}>
                            <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">
                                <img src={Instagram} alt="facebook" />
                            </a>
                        </li>
                        <li style={{ paddingLeft: "20%" }}>
                            <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">
                                <img src={Twitter} alt="facebook" />
                            </a>
                        </li>
                    </div>
                </ul>
            </div >
        </div >
    )
}
