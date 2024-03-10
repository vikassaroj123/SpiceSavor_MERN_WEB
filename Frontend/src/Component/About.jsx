import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only things we're serious about is food.</p>
                    </div>
                    <p className="mid">
                        In the realm of food services, quality and efficiency are paramount. From fast-food chains to fine dining establishments, ensuring timely delivery of delicious meals while maintaining high standards of hygiene is crucial. This involves meticulous menu planning, sourcing fresh ingredients, skilled culinary execution, and attentive customer service to satisfy diverse palates.
                    </p>
                    <Link to={"/"} >
                        Explore Menu
                        <span >
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="png" />
                </div>
            </div>
        </section>
    )
}

export default About