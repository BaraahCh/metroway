import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import { Container, Col, Row } from "react-bootstrap";
import "./results.css";

export default function Results() {
    return (
        <div>
            <Topbar />
            <div className="resultsContainer">
                <Container>
                    <Row>
                        <Col>
                            <span className="blueFont title">Your Search Results</span>
                        </Col>
                        <Col>
                            <div className="title2Row">
                                <div className='d-flex flex-row align-items-center'>
                                    <span className='title2 blackFont'>Available Trains</span>
                                    <span className='trainsCount'>5 Trains available</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}
