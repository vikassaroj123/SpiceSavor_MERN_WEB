import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
const NotFound = () => {
    return (
        <>
            <section className='notFound' id='notFound'>
                <div className="container">
                    <img src="/notFound.svg" alt="Not Found" />
                    <h1>LOOKS LIKE YOU'RE LOST</h1>
                    <p>We can't seems to find you the page you're looking for</p>
                    <Link to={'/'}>
                        Back to home
                        <span>
                            <HiOutlineArrowRight />
                        </span>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default NotFound