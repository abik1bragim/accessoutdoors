import React from 'react'
import './Banner.css'
import { RiMessage2Fill, RiPencilFill } from 'react-icons/ri'
function Banner() {
    return (
        <div className='main-ban'>
            <div className="nav">
                <input type="checkbox" id="active" />
                <label for="active" class="menu-btn"><span></span></label>
                <label for="active" class="close"></label>
                <div class="wrapper">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li><a href="/">Equipment</a></li>
                        <li><a href="/">Areas</a></li>
                        <li><a href="/">How It Works</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Hire Agreement</a></li>
                    </ul>
                </div>
                <div class="content">
                    <div class="image">
                        <img src="https://www.accessoutdoors.co.uk/shared/images/content/bus_56086/thumbnails/Access-Outdoors-New2.png?cache=64518" alt="" />
                    </div>
                </div>
            </div>
            <div className="message">
                <div className="chat">
                    <p>Chat with us 👋</p>
                </div>

                <div className="mess">
                    <RiMessage2Fill />

                    <div className="mess2">
                        <RiPencilFill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner