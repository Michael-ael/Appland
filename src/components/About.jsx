import React from 'react'

const About = (props) => {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>

            <div className="about-text">
                <h2> {props.title} </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident velit temporibus nostrum cum quisquam atque quos consequatur est assumenda dolorem sunt ratione in molestiae maxime repudiandae, esse distinctio aut?
                </p>
                <button> {props.button} </button>
            </div>
        </div>
    )
}

export default About
