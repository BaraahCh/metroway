import React from 'react'
import "./footer.css"
import { Row, Col } from "react-bootstrap";
import Facebook from '../../images/facebook.png';
import Instagram from '../../images/instagram.png';
import Twitter from '../../images/twitter.png';

export default function footer() {
    return (
        <div className='footer' >
            <Row style={{ marginRight: "0", padding: "1%" }}>
                <Col md={3}>
                    <div >
                        <span className='footerlogo'><span className='whiteFont'>Metro</span>way</span>
                    </div>
                </Col>
                <Col>
                    <span className='footertext'>Planning your next trip?</span><br />
                    <span className='footersubscribe'>Subscribe to our newsletter. Get the latest travel trends & deals!</span>

                </Col>
                <Col><input className='inputstyle1' type="email" placeholder='Enter Email ID' /></Col>
            </Row>
            <div>

                <Row className='p-0 m-0 mt-3'>
                    <Col md={7} >
                        <Row align="center" >

                            <Col><a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">About us</a></Col>



                            <Col><a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">Mobile</a></Col>


                            <Col><a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">Privacy</a></Col>


                            <Col> <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">Terms of use</a></Col>


                            <Col>  <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">Career</a></Col>


                            <Col md={3}> <a style={{ textDecoration: "none", color: "white" }} href="https://www.google.com">Customer Service</a></Col>
                        </Row>

                    </Col>
                    <Col className='iconsstyle d-flex flex-row justify-content-end'>


                        <a style={{ textDecoration: "none", color: "white", marginLeft: 20 }} href="https://www.google.com">
                            <img src={Facebook} alt="facebook" />
                        </a>


                        <a style={{ textDecoration: "none", color: "white", marginLeft: 20 }} href="https://www.google.com">
                            <img src={Instagram} alt="facebook" />
                        </a>


                        <a style={{ textDecoration: "none", color: "white", marginLeft: 20, marginRight: 20 }} href="https://www.google.com">
                            <img src={Twitter} alt="facebook" />
                        </a>


                    </Col>
                </Row>

            </div >
        </div >
    )
}
