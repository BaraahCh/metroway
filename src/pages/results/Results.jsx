import React, { useEffect, useState } from 'react';
import Topbar from '../../components/topbar/Topbar';
import { Container, Col, Row, Card, Spinner } from "react-bootstrap";
import "./results.css";
import { useNavigate } from 'react-router-dom';
import data from "../../train_results.json";
import 'react-calendar/dist/Calendar.css';
import Frame5 from '../../images/Frame5.png';
import Frame6 from '../../images/Frame6.png';
import Ticket from '../../components/ticket/Ticket';

export default function Results() {
    const navigate = useNavigate();
    // Get the search parameters from local storage
    const searchParams = JSON.parse(localStorage.getItem("searchParams"));
    const [results, setResults] = useState([]); // The array of the trains that will be displayed as the search results
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentDates, setCurrentDates] = useState([]) // The array of the dates that will be displayed in the calendar's carousel

    useEffect(() => {
        async function fillInfo() {
            window.scroll(0, 0); // Scroll to the top of the page
            getInfo();
            fillDays(new Date(searchParams.date));
            getResults(searchParams.departure, searchParams.destination, new Date(searchParams.date));
        }
        fillInfo()
    }, [])

    /**
     *  Fill the inputs with the information saved in local storage and select the choosen date in the calendar's carousel
     * */
    const getInfo = () => {
        setFrom(searchParams.departure);
        setTo(searchParams.destination);
        setSelectedDate(new Date(searchParams.date));
    }

    /** This funtion helps in finding the available trains 
      *  which have the same origin, destination and date passed as parameters,
      *  and wich have the number of available seats greater or equal to the choosen number of passengers.
      *  If there are no trains available it sets the results array as empty [].
    **/
    const getResults = (selectedOrigin, selectedDestination, selectedD) => {
        let res = data.filter(d => d.origin.toLocaleLowerCase() === selectedOrigin.toLocaleLowerCase() && d.destination.toLocaleLowerCase() === selectedDestination.toLocaleLowerCase() && dateFormat(d.date, d.time_depart).toString() === selectedD.toString() && searchParams.passengersNb <= d.available_seats);
        if (res) setResults(res);
        else setResults([]);
    }

    /** 
       * This function is called when the user click on the "Search for trains" button, 
       * it will change the results based on the origin and destination passed in the input fields
    **/
    const handleSubmit = (e) => {
        e.preventDefault();
        getResults(from, to, selectedDate);
    }

    /**
       * This function takes a date and adds a number of days to it.
       * It returns a new date object with the date set to the date passed as parameter plus the number of days passed in.
    **/
    const addDays = (date, days) => {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    /**
        * This function fills the 6 dates of the carousel's calendar in the currentDates array.
    **/
    const fillDays = (sd) => {
        let datesArray = [];

        // Fill the date passed as parameter and 2 dates from 2 previous days in the currentDates array
        for (let i = 2; i >= 0; i--) {
            datesArray.push(addDays(sd, -i).toString().split(" "));
        }

        // Fill 3 dates from 3 days after the date passed as parameters in the currentDates array
        for (let i = 1; i <= 3; i++) {
            datesArray.push(addDays(sd, i).toString().split(" "));
        }
        setCurrentDates(datesArray);
        /*  The dates are converted to strings then splitted by empty space " ".
            The currentDates array will look like this : 
                [   ['Sun', 'Jan', '29', '2023', '08:00:00', 'GMT+0300', '(GMT+03:00)'],
                    ['Mon', 'Jan', '30', '2023', '08:00:00', 'GMT+0300', '(GMT+03:00)'],
                    ...
                ] */
    }


    /**
     * This function is called when the user click on one of the dates in the calendar's carousel.
     * It changes the trains results based on the selected date
     *  */
    const handleCalendarButtonClicked = (d) => {
        let newDate = new Date(d.join(" "));
        getResults(from, to, newDate);
        setSelectedDate(newDate);
    }


    /**
     * This function is called when the user clicks on the ">" button in the calendar's carousel.
     * it removes the first date from the currentDates array,
     * and adds the date after one day of the last date in it.
     * And it sets the selected date one day after.
     */
    const handleNextClick = () => {
        let datesArray = currentDates;
        datesArray.push(addDays(new Date(datesArray[5].join(" ")), 1).toString().split(" "))
        datesArray.splice(0, 1);
        let newDate = addDays(selectedDate, 1)
        getResults(from, to, newDate);
        setSelectedDate(newDate);
        setCurrentDates(datesArray);
    }


    /**
     * This function is called when the user clicks on the "<" button in the calendar's carousel.
     * it removes the last date from the currentDates array,
     * and adds the date before one day of the first date in it.
     * And it sets the selected date one day before.
     */
    const handlePreviousClick = () => {
        let datesArray = currentDates;
        datesArray.splice(5, 1);
        datesArray.splice(0, 0, addDays(new Date(datesArray[0].join(" ")), -1).toString().split(" "))
        let newDate = addDays(selectedDate, -1)
        getResults(from, to, newDate);
        setSelectedDate(newDate);
        setCurrentDates(datesArray);
    }


    /**
     * This function is called when the user clicks on one of the colored card in the ticket.
     * It saves the ticket's properties to the local storage and navigates the user to the Review Ticket page.
     * If the user clicks on a card which is not available it will alert "Not Available!".
     */
    const handleTicketClick = (r, price, ticketClass) => {
        if (!price) {
            alert("Not Available!");
            return;
        }
        localStorage.setItem("ticket", JSON.stringify({ ticket: r, price: price, ticketClass: ticketClass, total: (searchParams.passengersNb * price) + 500 }));
        navigate("/review");
    }

    /**
     * It takes a date and time string.
     * @returns A date object.
     */
    const dateFormat = (date, time) => {
        let splittedDate = date.split("/");
        let splittedTime = time.split(":");
        return new Date(splittedDate[2], splittedDate[0] - 1, splittedDate[1], splittedTime[0], splittedTime[1]);
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
                                <Row><Col><button className="buttonstyle mt-4 mb-4" type="submit" >Search for trains</button></Col></Row>
                                <Row>
                                    <button onClick={handlePreviousClick} className='arrowButton blueFont'><i className='fa fa-angle-left '></i></button>
                                    {selectedDate && currentDates && currentDates.length > 0 && currentDates.map(d => (
                                        <button onClick={() => handleCalendarButtonClicked(d)} className={new Date(d.join(" ")).toString() === selectedDate.toString() ? 'calendarButton blueBackground' : "calendarButton"}>{d[0]}<br />{d[2]}</button>
                                    ))}
                                    <button onClick={handleNextClick} className='arrowButton blueFont'><i className='fa fa-angle-right '></i></button>
                                    <img style={{ marginTop: "15px" }} src={Frame5} alt="Frame5" />
                                    <img style={{ marginTop: "15px" }} src={Frame6} alt="Frame6" />
                                </Row>
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
                                {results && results.length > 0 ?
                                    results.map(r => (
                                        <Card className="blackFont" key={r.flight_id}>
                                            <Ticket origin={r.origin} destination={r.destination} time_depart={r.time_depart} time_arrival={r.time_arrival} date_time_depart={r.date_time_depart} date_time_arrival={r.date_time_arrival} />
                                            <Row className="rectangles">
                                                <Col className="greenRect rect" onClick={() => handleTicketClick(r, 800, "3A")}>
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>3A</span>
                                                        <span align="right">Avl - 046</span>
                                                    </div>
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>Tatkal</span>
                                                        <span align="right">₹800</span>
                                                    </div>
                                                </Col>
                                                <Col className="orangeRect rect" onClick={() => handleTicketClick(r, 1000, "2A")}>
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>2A</span>
                                                        <span align="right">Avl - 006</span>
                                                    </div>
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>Tatkal</span>
                                                        <span align="right">₹1000</span>
                                                    </div>
                                                </Col>
                                                <Col className="pinkRect rect" onClick={() => handleTicketClick(r, 1200, "1A")}>
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>1A</span>
                                                        <span align="right">WL - 36</span>
                                                    </div>
                                                    <div className="d-flex flex-row justify-content-between mobileFlexRow">
                                                        <span>Tatkal</span>
                                                        <span align="right">₹1200</span>
                                                    </div>
                                                </Col>
                                                <Col className="whiteRect rect" align="center" onClick={() => handleTicketClick(r, "", "")}>
                                                    <span align="center">SL<br />Not Available</span>
                                                </Col>
                                            </Row>
                                            <Row className="mt-2 mb-0 cardDate blueFont" >
                                                <Col align="right">Seats Available: {r.available_seats}</Col>
                                            </Row>

                                        </Card>
                                    )) : <h5 align="center" style={{ color: "red" }}>No Results!</h5>}
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}
