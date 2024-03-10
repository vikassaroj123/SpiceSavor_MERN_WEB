import React, { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !date || !time || !phone) {
            toast.error("Please fill in all fields.");
            return;
        }

        try {
            const { data } = await axios.post(
                'https://spicesavor-web.onrender.com/reservation',
                {
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    email: email.trim(),
                    date,
                    time,
                    phone
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );
            toast.success("Booking sent successfully to Restro.");
            setFirstName("");
            setLastName("");
            setEmail("");
            setDate("");
            setTime("");
            setPhone("");
            navigate("/success");
        } catch (err) {
            // Inside the catch block of handleReservation function
            console.error("Error:", err);
            if (err.response) {
                if (err.response.status === 400) {
                    toast.error(err.response.data.message || "Bad Request");
                } else if (err.response.status === 401) {
                    toast.error("Unauthorized - Please login to proceed.");
                } else if (err.response.status === 500) {
                    toast.error("Internal Server Error - Please try again later.");
                } else {
                    toast.error(`An error occurred while processing your request: ${err.response.data.message || err.message}`);
                }
            } else if (err.request) {
                toast.error("Network Error - Server is not responding. Please try again later.");
            } else {
                toast.error(`An error occurred: ${err.message}`);
            }

        }
    };

    return (
        <section className='reservation' id='reservation'>
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For further Questions, Please Call!</p>
                        <form onSubmit={handleReservation}>
                            <div>
                                <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div>
                                <input type="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />
                                <input type="time" placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} />
                            </div>

                            <div>
                                <input type="email" placeholder='Email' className='email_tag' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="tel" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <button type='submit'>RESERVE NOW <span><HiOutlineArrowRight /></span></button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Reservation;