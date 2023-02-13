import React, { useEffect, useState } from 'react';
import Topbar from '../../components/topbar/Topbar';
import { Container, Col, Row, Card, Spinner } from "react-bootstrap";
import "./results.css";
import { useParams } from 'react-router-dom';
import data from "../../train_results.json";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Results(props) {
    const { origin, destination, date } = useParams();
    const [results, setResults] = useState([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [selectedDate, setSelectedDate] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getResults(origin, destination, date);
    }, [])

    const getResults = (origin, destination, date) => {
        setLoading(true);
        let formattedDate = date.split(" ").join("/");
        setResults(data.filter(d => d.origin === origin && d.destination === destination && d.date === formattedDate));
        setLoading(false);
    }

    const dateFormatter = (date) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let d = date.split(" ")[0].split("/");
        return months[d[0] - 1] + " " + d[1]
    }

    const tConvert = (time) => {
        const [hourString, minute] = time.split(":");
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
    }

    const getTimeDiff = (date1, date2) => {
        let splittedDate1 = date1.split(" ")[0].split("/");
        let splittedTime1 = date1.split(" ")[1].split(":");
        let splittedDate2 = date2.split(" ")[0].split("/");
        let splittedTime2 = date2.split(" ")[1].split(":");
        let time1 = new Date(splittedDate1[2], splittedDate1[1] - 1, splittedDate1[0], splittedTime1[0], splittedTime1[1])
        let time2 = new Date(splittedDate2[2], splittedDate2[1] - 1, splittedDate2[0], splittedTime2[0], splittedTime2[1])
        var diff = (time2 - time1) / 1000;
        let hours = diff / (60 * 60);
        let minutes = (diff / 60) % 60;
        return Math.abs(Math.floor(hours)) + " hours" + " " + minutes + " minutes";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getResults(from, to, selectedDate);
    }

    return (
        <div>
            <Topbar />
            <div className="resultsContainer">
                <Container>
                    <Row>
                        <Col lg={5}>
                            <span className="blueFont title">Your Search Results</span>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <input
                                            className='inputstyle'
                                            type="text"
                                            placeholder='NDLS, New Delhi Railway Staion'
                                            value={from}
                                            onChange={(e) => setFrom(e.target.value)}
                                            required
                                        />
                                    </Col>
                                    <Col>
                                        <input
                                            className='inputstyle'
                                            type="text"
                                            placeholder='LJN,Lucknow Junction'
                                            value={to}
                                            onChange={(e) => setTo(e.target.value)}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row><Col><button className="buttonstyle mt-4" type="submit" >Search for trains</button></Col></Row>
                                <Calendar className="calendar" onChange={(date) => setSelectedDate(date)} value={selectedDate} />
                            </form>
                        </Col>
                        <Col lg={7}>
                            <div className="title2Row">
                                <div className='d-flex flex-row align-items-center'>
                                    <span className='title2 blackFont'>Available Trains</span>
                                    <span className='trainsCount'>{results ? results.length : 0} Trains available</span>
                                </div>
                            </div>
                            <div className="scrollable">
                                {!loading && results && results.length > 0 ?
                                    results.map(r => (
                                        <Card className="blackFont" key={r.flight_id}>
                                            <Row className="mobileFlexRow">
                                                <Col className="d-flex flex-column">
                                                    <span className="cardDate">{dateFormatter(r.date_time_depart)}</span>
                                                    <span className="cardTime d-flex flex-column">
                                                        <span>{tConvert(r.time_depart)}</span>
                                                        <span>{r.origin}</span>
                                                    </span>
                                                </Col>
                                                <Col className="d-flex flex-column align-items-center">
                                                    <span className="timeDiff">{getTimeDiff(r.date_time_depart, r.date_time_arrival)}</span>

                                                    <svg className="vector" width="300" height="6" viewBox="0 0 542 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM536.333 3C536.333 4.47276 537.527 5.66667 539 5.66667C540.473 5.66667 541.667 4.47276 541.667 3C541.667 1.52724 540.473 0.333333 539 0.333333C537.527 0.333333 536.333 1.52724 536.333 3ZM3 3.5H539V2.5H3V3.5Z" fill="#808080" fill-opacity="0.75" />
                                                    </svg>

                                                </Col>
                                                <Col align="right" className="d-flex flex-column">
                                                    <span className="cardDate">{dateFormatter(r.date_time_arrival)}</span>
                                                    <span className="cardTime d-flex flex-column">
                                                        <span>{tConvert(r.time_arrival)}</span>
                                                        <span>{r.destination}</span>
                                                    </span>
                                                </Col>
                                            </Row>

                                            <Row className="rectangles">
                                                <Col className="greenRect rect">
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>3A</span>
                                                        <span align="right">Avl - 046</span>
                                                    </div>
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>Tatkal</span>
                                                        <span align="right">$800</span>
                                                    </div>
                                                </Col>
                                                <Col className="orangeRect rect">
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>2A</span>
                                                        <span align="right">Avl - 006</span>
                                                    </div>
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>Tatkal</span>
                                                        <span align="right">$1000</span>
                                                    </div>
                                                </Col>
                                                <Col className="pinkRect rect">
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>1A</span>
                                                        <span align="right">WL - 36</span>
                                                    </div>
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>Tatkal</span>
                                                        <span align="right">$1200</span>
                                                    </div>
                                                </Col>
                                                <Col className="whiteRect rect" align="center">
                                                    <span align="center">SL<br />Not Available</span>
                                                </Col>
                                            </Row>
                                            <Row className="mt-2 mb-0 cardDate blueFont" >
                                                <Col align="right">Seats Available: {r.available_seats}</Col>
                                            </Row>

                                        </Card>
                                    )) : loading ?
                                        <div align="center">
                                            <Spinner animation="border" role="status" variant="primary" >
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>
                                        </div>
                                        : ""}
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}
