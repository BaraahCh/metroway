import React, { useState } from "react";
import "./home.css"
import metro from '../../images/metro.png';
import calendar from '../../images/calendar.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Home() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <div className='d-flex flex-row justify-content-between'>
                <div className='homelogo'>
                    <span className="logo"><span className='blueFont'>Metro</span>way</span>
                    <span className=" hello blueBackground">Hello Travellers</span>
                    <span className="title1">made your booking<br /> experience easy!</span><br />
                    <span className='description'>Train booking is a process of choosing and purchasing train seats online.<br /> It is an easy process but were are here to make it much better & simple.</span>
                    <form className='searchform' action="">
                        <input className='inputstyle1' type="text" placeholder='NDLS, New Delhi Railway Staion' />
                        <input className='inputstyle2' type="text" placeholder='LJN,Lucknow Junction' />
                        <DatePicker className="date" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="MMMM d, yyyy" />
                        <button className="buttonstyle" >Search for trains</button>
                    </form>
                </div>
                <div>
                    <img className='imgstyle' src={metro} alt="metro" />

                </div>
            </div>
        </div >
    )
}
