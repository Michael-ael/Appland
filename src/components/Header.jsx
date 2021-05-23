import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div id='main'>
            <Navbar />

            <div className="name">
                <h1> <span>Lauch Your App</span> With Confidence and Creativity </h1>
                <p className="details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi dignissimos enim totam ullam incidunt dolore placeat rerum nemo iure.
                </p>
                <a href="#" className='cv-btn'> Download </a>
            </div>
        </div>
    )
}

export default Header
