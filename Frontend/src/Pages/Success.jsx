import React, { useEffect, useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const Success = () => {
    const [countDown, setCountDown] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const timeOutId = setInterval(() => {
            setCountDown(prevCount => {
                if (prevCount === 1) {
                    clearInterval(timeOutId);
                    navigate('/');
                }
                return prevCount - 1;
            });
        }, 1000);
        return () => clearInterval(timeOutId);
    }, []);

    return (
        <>
            <section className='notFound'>
                <div className="container">
                    <img src="/sandwich.png" alt="success" />
                    <h1>Sunmitted successfully  <br />
                        <span>Redirecting to home in {countDown} seconds..
                        </span>
                    </h1>
                    <Link to={"/"}>Back to Home <HiOutlineArrowRight /></Link>
                </div>
            </section>
        </>
    );
};

export default Success;