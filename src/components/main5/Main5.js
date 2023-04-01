import React from 'react'
import './Main5.css'
import { FaEnvelope } from 'react-icons/fa'
function Main5() {
    return (
        <div className='main5'>
            <div className="m5-text">
                <h1>If you have any enquiries or queries,</h1>
                <p><FaEnvelope /> Email us on enquiries@accessoutdoors.co.uk.</p>

                <p>Click below to hire your camping equipment for your next expedition!</p>

                <div className="m5-btns">
                    <button>Book Now</button>
                    <button>Enquire</button>
                </div>
            </div>
        </div>
    )
}

export default Main5