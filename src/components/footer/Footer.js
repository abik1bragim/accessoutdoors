import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="m-foo">
                <img src="https://www.accessoutdoors.co.uk/shared/images/content/bus_56086/logo/Access-Outdoors-black2.png" alt="" />

                <p>Copyright  2023 - Access Outdoors</p>
            </div>

            <div className="foo-menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Equipment</a>
                    </li>
                    <li>
                        <a href="/">Areas</a>
                    </li>
                    <li>
                        <a href="/">How It Works</a>
                    </li>
                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                    <li>
                        <a href="/">Hire Agreement</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer