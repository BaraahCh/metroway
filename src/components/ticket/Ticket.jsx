import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import "./ticket.css"

export default function Ticket(props) {
    const origin = props.origin;
    const destination = props.destination;
    const time_depart = props.time_depart;
    const time_arrival = props.time_arrival;
    const date_time_depart = props.date_time_depart;
    const date_time_arrival = props.date_time_arrival;

    /**
     * Takes a date as parameter.
     * Converts it to this format "MMM DD", ex: "Feb 15"
     * returns the new formatted date
     */
    const dateFormatter = (date) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let d = date.toString().split(" ")[0].split("/");
        return months[d[0] - 1] + " " + d[1]
    }

    /**
     * Takes a time as parameter with this format "hh:mm"
     * converts it from 24h format to 12h format
     * returns the new converted date in this format "hh:mm AM/PM"
     */
    const tConvert = (time) => {
        const [hourString, minute] = time.split(":");
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM"); // ex: 8:00 AM
    }

    /**
     * Takes two dates
     * Returns the duration between them by hours and minutes
     */
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
        return Math.abs(Math.floor(hours)) + " hours" + " " + minutes + " minutes"; // ex: 4 hours 30 minutes
    }

    return (
        <div>
            <Row className="mobileFlexRow">
                <Col className="d-flex flex-column">
                    <span className="cardDate">{dateFormatter(date_time_depart)}</span>
                    <span className="cardTime d-flex flex-column">
                        <span>{tConvert(time_depart)}</span>
                        <span>{origin}</span>
                    </span>
                </Col>
                <Col className="d-flex flex-column align-items-center">
                    <span className="timeDiff">{getTimeDiff(date_time_depart, date_time_arrival)}</span>

                    <svg className="vector" width="300" height="6" viewBox="0 0 542 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM536.333 3C536.333 4.47276 537.527 5.66667 539 5.66667C540.473 5.66667 541.667 4.47276 541.667 3C541.667 1.52724 540.473 0.333333 539 0.333333C537.527 0.333333 536.333 1.52724 536.333 3ZM3 3.5H539V2.5H3V3.5Z" fill="#808080" fill-opacity="0.75" />
                    </svg>

                </Col>
                <Col align="right" className="d-flex flex-column">
                    <span className="cardDate">{dateFormatter(date_time_arrival)}</span>
                    <span className="cardTime d-flex flex-column">
                        <span>{tConvert(time_arrival)}</span>
                        <span>{destination}</span>
                    </span>
                </Col>
            </Row>
        </div>
    )
}
