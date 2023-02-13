import React from 'react'
import "./review.css";
import Topbar from '../../components/topbar/Topbar';
import { Container, Col, Row } from "react-bootstrap";
export default function Review() {
    return (
        <div>
            <Topbar />
            <Container>
                <Row>
                    <Col>

                        <span className='reviewtitle'>Review your booking</span>
                        <form className="formsstyle">
                            <h5>Traveller Details</h5>
                        </form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}
