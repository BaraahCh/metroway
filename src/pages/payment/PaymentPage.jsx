import React, { useEffect } from 'react'
import "./payment.css"
import Topbar from '../../components/topbar/Topbar';
import Ticket from '../../components/ticket/Ticket';
import { Container, Col, Row } from "react-bootstrap";
import Payment from '../../components/payment/Payment';
import UPIPayment from "../../images/UPI Payment.png";
import CreditCard from "../../images/Credit Card.png";
import PayLater from "../../images/Paylater.png";
import NetBanking from "../../images/Net Banking.png";
import MobileWallets from "../../images/Mobile Wallets.png";
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
    const navigate = useNavigate();
    let ticket = JSON.parse(localStorage.getItem("ticket"));
    const price = ticket.price;
    const total = ticket.total;
    ticket = ticket.ticket;

    useEffect(() => {
        window.scroll(0, 0); //Scroll to top
    }, [])

    /**
     * Called when the user clicks on one of the payment methods buttons
     * navigates to the payment's review page
     */
    const handlePayClick = (e) => {
        e.preventDefault();
        navigate("/paymentreview")
    }
    return (


        <div>
            <Topbar />
            <Container>
                <div className='reviewtitle' >Pay <span style={{ color: "#FF6060" }}>₹{total}</span> to confirm booking</div>
                <Row>
                    <Col>

                        <div className='cardStyle lightBlueBackground'>
                            <Ticket origin={ticket.origin} destination={ticket.destination} time_depart={ticket.time_depart} time_arrival={ticket.time_arrival} date_time_depart={ticket.date_time_depart} date_time_arrival={ticket.date_time_arrival} />
                            <Col style={{ marginTop: "5%" }}><h5 className="subTitle">Traveller Details</h5></Col>
                            <Row style={{ marginTop: "5%" }}>
                                <Col md={4}>John Woodspear</Col>
                                <Col style={{ color: '#606060' }}>24yrs</Col>
                                <Col style={{ color: '#606060' }}>male</Col>
                                <Col align="right" style={{ color: '#606060' }}>Lower Bearth</Col>
                            </Row>
                            <Row style={{ marginTop: "5%" }}>
                                <Col>E-Tickets will be sent to:</Col>
                                <Col align="right" >John Woodspear (Primary)<br />
                                    John Woodspear@gmail.com</Col>
                            </Row>
                        </div>

                        <div className="subTitle mb-4">All Payment Options</div>
                        <Row className='pointer align-items-center' onClick={handlePayClick}>
                            <Col md={1}><img src={UPIPayment} /></Col>
                            <Col md={9}>
                                <div className="paymentTitle">UPI Payment</div>
                                <div className="paymentSubTitle">Pay instantly with UPI Apps</div>
                            </Col>
                            <Col align="right"><i className="fa fa-angle-right"></i></Col>
                        </Row>
                        <hr />

                        <Row className='pointer align-items-center' onClick={handlePayClick}>
                            <Col md={1}><img src={CreditCard} /></Col>
                            <Col md={9}>
                                <div className="paymentTitle">Credit / Debit Card</div>
                                <div className="paymentSubTitle">Visa, Mastercard, amex, Rupay and more</div>
                            </Col>
                            <Col align="right"><i className="fa fa-angle-right"></i></Col>
                        </Row>
                        <hr />

                        <Row className='pointer align-items-center' onClick={handlePayClick}>
                            <Col md={1}><img src={PayLater} /></Col>
                            <Col md={9}>
                                <div className="paymentTitle">Paylater</div>
                                <div className="paymentSubTitle">LazyPay, Simpl, ZestMoney, ICICI PayLater, HDFC Flexipay and more</div>
                            </Col>
                            <Col align="right"><i className="fa fa-angle-right"></i></Col>
                        </Row>
                        <hr />

                        <Row className='pointer align-items-center' onClick={handlePayClick}>
                            <Col md={1}><img src={NetBanking} /></Col>
                            <Col md={9}>
                                <div className="paymentTitle">Net Banking</div>
                                <div className="paymentSubTitle">We Support all major banks</div>
                            </Col>
                            <Col align="right"><i className="fa fa-angle-right"></i></Col>
                        </Row>
                        <hr />
                        <Row className='pointer align-items-center' onClick={handlePayClick}>
                            <Col md={1}><img src={MobileWallets} /></Col>
                            <Col md={9}>
                                <div className="paymentTitle">Mobile Wallets</div>
                                <div className="paymentSubTitle">Amazonpay, Mobikwik, Payzapp, PayPal</div>
                            </Col>
                            <Col align="right"><i className="fa fa-angle-right"></i></Col>
                        </Row>
                        <hr />


                    </Col>

                    <Col>
                        <Payment price={price} payment />
                        <button className="cancelButton" onClick={() => navigate("/review")}>Cancel</button>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
