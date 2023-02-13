import React, { useState } from "react";
import "./home.css"
import metro1 from '../../images/metro1.png';
import CalendarIcon from '../../images/calendar.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Row, Col } from "react-bootstrap";
import Logo from "../../components/logo/Logo";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [date, setDate] = useState();
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let d = (date.getMonth() + 1) + " " + date.getDate() + " " + date.getFullYear();
        navigate("/results/" + departure + "/" + destination + "/" + d);
    }
    return (


        <Row className="homeContainer">

            <Col>
                <div className='homelogo'>
                    <div style={{ paddingTop: "20px" }}>
                        <Logo />
                    </div>

                    <span className=" hello blueBackground">Hello Travellers</span>
                    <div className="title1">made your booking experience easy!</div><br />
                    <span className='description'>Train booking is a process of choosing and purchasing train seats online. It is an easy process but were are here to make it much better & simple.</span>

                    <form className='searchform' onSubmit={handleSubmit}>

                        <Row>
                            <Col>
                                <input
                                    className='inputstyle'
                                    type="text"
                                    placeholder='NDLS, New Delhi Railway Staion'
                                    value={departure}
                                    onChange={(e) => setDeparture(e.target.value)}
                                    required
                                />
                            </Col>
                            <Col>
                                <input
                                    className='inputstyle'
                                    type="text"
                                    placeholder='LJN,Lucknow Junction'
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                                <DatePicker className="date" selected={date} onChange={(date) => setDate(date)} dateFormat="MMMM d, yyyy" required placeholderText={new Date().toDateString()} />
                                <img src={CalendarIcon} className="calendarIcon" alt="Calendar Icon" />
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row><Col><button className="buttonstyle" type="submit" >Search for trains</button></Col></Row>

                    </form>

                </div >
            </Col>

            <Col className="imgcol">

                <img className="imgStyle" src={metro1} alt="metro" />


            </Col>

        </Row>

    )
}
