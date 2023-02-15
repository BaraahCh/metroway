import React, { useEffect } from 'react'
import "./review.css";
import Topbar from '../../components/topbar/Topbar';
import { Container, Col, Row } from "react-bootstrap";
import TikkaRice from "../../images/Tikka Rice.png";
import FriedRice from "../../images/Fried Rice.png";
import CurdMeal from "../../images/Curd Meal.png";
import Ticket from '../../components/ticket/Ticket';
import Payment from '../../components/payment/Payment';
import { useNavigate } from 'react-router-dom';

export default function Review() {
    const navigate = useNavigate();
    let ticket = JSON.parse(localStorage.getItem("ticket"));
    const ticketClass = ticket.ticketClass;
    ticket = ticket.ticket;

    useEffect(() => {
        window.scroll(0, 0); // Scroll to top.
    }, [])

    /**
     * Navigates to the booking confirmation & payment page
     * Called whent the user clicks on the "Book Now" button
     */
    const handleBookNowClick = (e) => {
        e.preventDefault();
        navigate("/payment");
    }

    /**
     * Called when the user clicks on the "Cancel" button
     * Sets the tickets properties saved in the local storage as empty
     * Navigates to the results page
     */
    const handleCancelClick = (e) => {
        e.preventDefault();
        localStorage.setItem("ticket", JSON.stringify({ ticket: "", price: "", ticketClass: "", total: "" }));
        navigate("/results");
    }
    return (
        <div className='reviewbody'>
            <Topbar />
            <Container>
                <div className='reviewtitle'>Review your booking</div>
                <Row>
                    <Col>

                        <div className="cardStyle">
                            <Row className='align-items-center'>
                                <Col md={3} className="subTitle p-0">Traveller Details</Col>
                                <Col md={8} className='booking'>As per IRCTC Guidelines, you can book up to 4 travellers at once</Col>
                                <Col align="right" md={1}><button className="plusStyle blueFont">+</button></Col>
                            </Row>
                            <Row className='iconstyle'>
                                <Col><div >1. John Woodspear</div></Col>
                                <Col align="right">
                                    <i className="fa fa-pen icons penIcon" ></i>
                                    <i className="fa-regular fa-trash-can icons trashIcon" ></i>
                                </Col>
                            </Row>
                            <Row>
                                <form>
                                    <Row><span className="littleTitle">Traveller Details</span></Row>
                                    <Row>
                                        <Col md={7}><input placeholder='Name of Traveller' /></Col>
                                        <Col><input placeholder='Age' /></Col>
                                        <Col>
                                            <select className='inputstyle mt-0' value="Gender">
                                                <option value="Gender" disabled>Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4 align-items-end" >
                                        <Col md={3}><input placeholder='Nationality' /></Col>
                                        <Col md={6}><select className='inputstyle mt-0' value='Berth Preference'><option value="Berth Preference">Berth Preference</option></select></Col>
                                        <Col><button className='buttonstyle' style={{ height: 40 }}>Save</button></Col>
                                    </Row>
                                </form>
                            </Row>
                        </div>

                        <div className="cardStyle">
                            <Row className='align-items-center'>
                                <Col md={3} className="subTitle p-0">IRCTC Login</Col>
                                <Col md={8} className='booking'>Password is required later to complete booking</Col>
                            </Row>
                            <Row>
                                <form>
                                    <Row className="mt-4 mb-4 align-items-end" >
                                        <Col md={9}><input placeholder='Enter IRCTC User ID' /></Col>
                                        <Col><button className='buttonstyle' style={{ height: 40 }}>Verify</button></Col>
                                    </Row>
                                    <Row className='blueFont links'>
                                        <Col md={3}><a >Create IRCTC ID</a></Col>
                                        <Col md={3}><a>Forgot User ID ?</a></Col>
                                    </Row>
                                </form>
                            </Row>
                        </div>

                        <div className="cardStyle">
                            <Row className='align-items-center'>
                                <Col md={3} className="subTitle p-0">Contact Details</Col>
                                <Col md={8} className='booking'>Your ticket info will be sent here</Col>
                            </Row>
                            <Row>
                                <form>
                                    <Row className="mt-4 mb-4 align-items-end" >
                                        <Col><input placeholder='Mobile Number' /></Col>
                                        <Col><input placeholder='Email ID' /></Col>
                                    </Row>
                                </form>
                            </Row>
                        </div>
                        <Row align="center">
                            <Col md={4}>
                                <img src={TikkaRice} />
                                <p className='links p-3'>Paneer Tikka Rice Bowl - Mini <br /><div align="center" className='p-3'>₹200.00<br /><button className="addToButton mt-3">Add to Ticket</button></div></p>

                            </Col>
                            <Col md={4}>
                                <img src={FriedRice} />
                                <p className='links p-3'>Mixed Veg Fried Rice with dry fruits<br /><div align="center" className='p-3'>₹180.00<br /><button className="addToButton mt-3">Add to Ticket</button></div></p>

                            </Col>
                            <Col md={4}>
                                <img src={CurdMeal} />
                                <p className='links p-3'>Aloo Paratha Curd Meal (2 pcs)<br /><div align="center" className='p-3'>₹120.00<br /><button className="addToButton mt-3">Add to Ticket</button></div></p>

                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div className='cardStyle lightBlueBackground'>
                            <div className='subTitle mb-3'>Boarding Details</div>
                            <Row className='align-items-center subTitle mb-4'>
                                <Col>12430 - NDLS LKO AC SF</Col>
                                <Col align="right" className='blueFont'>Class {ticketClass} & Tatkal Quota</Col>
                            </Row>
                            <Ticket origin={ticket.origin} destination={ticket.destination} time_depart={ticket.time_depart} time_arrival={ticket.time_arrival} date_time_depart={ticket.date_time_depart} date_time_arrival={ticket.date_time_arrival} />
                            <button className='changeStationButton blueFont mt-4'>Change Boarding Station</button>
                        </div>
                        <hr />
                        <Payment />
                        <div align="center" className="booking mt-4 mb-4">Discounts, offers and price concessions will be applied later during payment</div>
                        <button className="buttonstyle" onClick={handleBookNowClick}>Book Now</button>
                        <button className="cancelButton" onClick={handleCancelClick}>Cancel</button>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
