import React from "react";
import { Link } from 'react-router-dom'
import Router from "../router";
const firstPage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img style={{ width: "100px", height: "100px", margin: '340px auto 100px' }} src='Vector.png' alt='img of start' />
            <Link to='/auth'> <p className="questions_start">კითხვარის <br /> <span>დაწყება</span></p></Link>
        </div>

    )
}
export default firstPage