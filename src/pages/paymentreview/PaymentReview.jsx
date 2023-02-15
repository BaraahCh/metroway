import React, { useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Ticket from '../../components/ticket/Ticket';
import Topbar from '../../components/topbar/Topbar'
import "./paymentReview.css";
import Barcode from "../../images/barcode.png";
import { useNavigate } from 'react-router-dom';

export default function PaymentReview() {
    const navigate = useNavigate();
    let ticket = JSON.parse(localStorage.getItem("ticket"));
    const price = ticket.price;
    const ticketClass = ticket.ticketClass;
    ticket = ticket.ticket;

    useEffect(() => {
        window.scroll(0, 0); // Scroll to top
    }, [])

    return (
        <div>
            <Topbar />
            <Container className="mt-5" >
                <div align="center">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43 59L32.125 48.125C31.2083 47.2083 30.0833 46.75 28.75 46.75C27.4167 46.75 26.25 47.25 25.25 48.25C24.3333 49.1667 23.875 50.3333 23.875 51.75C23.875 53.1667 24.3333 54.3333 25.25 55.25L39.5 69.5C40.4167 70.4167 41.5833 70.875 43 70.875C44.4167 70.875 45.5833 70.4167 46.5 69.5L74.875 41.125C75.7917 40.2083 76.25 39.0833 76.25 37.75C76.25 36.4167 75.75 35.25 74.75 34.25C73.8333 33.3333 72.6667 32.875 71.25 32.875C69.8333 32.875 68.6667 33.3333 67.75 34.25L43 59ZM50 100C43.0833 100 36.5833 98.6867 30.5 96.06C24.4167 93.4367 19.125 89.875 14.625 85.375C10.125 80.875 6.56333 75.5833 3.94 69.5C1.31333 63.4167 0 56.9167 0 50C0 43.0833 1.31333 36.5833 3.94 30.5C6.56333 24.4167 10.125 19.125 14.625 14.625C19.125 10.125 24.4167 6.56167 30.5 3.935C36.5833 1.31167 43.0833 0 50 0C56.9167 0 63.4167 1.31167 69.5 3.935C75.5833 6.56167 80.875 10.125 85.375 14.625C89.875 19.125 93.4367 24.4167 96.06 30.5C98.6867 36.5833 100 43.0833 100 50C100 56.9167 98.6867 63.4167 96.06 69.5C93.4367 75.5833 89.875 80.875 85.375 85.375C80.875 89.875 75.5833 93.4367 69.5 96.06C63.4167 98.6867 56.9167 100 50 100Z" fill="#31A91D" />
                    </svg>
                    <p className="greenText mt-4">Congratulations! You have successfully booked tickets</p>
                    <p className="subTitle1 mb-5">please carry ERS / VRM / SMS / Mail sent to your contact details, along with a relavant ID proof while travelling</p>
                </div>
                <Row>
                    <Col lg={8}>
                        <div className="cardStyle">
                            <Row className="font16 mb-5">
                                <Col>PNR No: 1234567890</Col>
                                <Col align="right">Transaction ID : 351511859256378</Col>
                            </Row>
                            <Ticket origin={ticket.origin} destination={ticket.destination} time_depart={ticket.time_depart} time_arrival={ticket.time_arrival} date_time_depart={ticket.date_time_depart} date_time_arrival={ticket.date_time_arrival} />
                            <Row style={{ marginTop: "5%" }}>
                                <Col>E-Tickets will be sent to:</Col>
                                <Col align="right" >John Woodspear (Primary)<br />
                                    John Woodspear@gmail.com</Col>
                            </Row>
                            <Row>
                                <div style={{ marginTop: "5%" }}><h5 className="subTitle">Traveller Details</h5></div>
                                <div >John Woodspear</div>
                                <div className='d-flex flex-row justify-content-between' style={{ marginTop: "5%" }}>
                                    <span style={{ color: '#606060', width: 300 }}>Age : 24 Yrs <br />Gender : Male</span>
                                    <span align="right" style={{ color: '#606060' }}>Booking Status : Confirmed (CNF) Seat/Coach no. : 44(lower berth), A1</span>
                                </div>
                            </Row>
                            <Row className='font20Bold mt-5'>
                                <Col>Total Fare</Col>
                                <Col align="right">₹3500.00</Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <div align="center">
                            <img src={Barcode} />
                            <p style={{ color: '#606060' }}>Scan the code to view in any device</p>
                            <button className="addToButton m-2" style={{ width: "100%" }}>Print ticket (English)</button>
                            <button className="addToButton m-2" style={{ width: "100%" }}>Print ticket (Hindi)</button>
                            <button className='buttonstyle m-2' onClick={() => navigate("/")}>Book another ticket</button>
                            <button className='buttonstyle m-2'>Download Ticket</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
