import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LecturerSignin = () => {
    const navigate = useNavigate();

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleSignin = async (e) => {
        e.preventDefault();

        if (!mail || !password) {
            setMessage("Please fill all the fields");
            setMessageType("error");
            setTimeout(() => setMessage(""), 2000);
            return;
        }

        const allData = { mail, password };
        const url = 'https://final-final-project-4.onrender.com/signin';

        try {
            const res = await axios.post(url, allData);
            if (res.status === 200 || res.status === 201) {
                setMessage("User Signed In Successfully");
                setMessageType("success");
                setTimeout(() => navigate("/LecturerDashboard"), 2000);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setMessage("User not found");
                setMessageType("error");
            } else if (error.response && error.response.status === 401) {
                setMessage("Invalid password");
                setMessageType("error");
                setMessage(error.response.data.error);
            }
            setMessageType("error");
        }
    };

    return (
        <>
            <div className="container-fluid vh-100">
                <div className="row h-100">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white p-5">
                        <h3 className="mb-4">Login to the website</h3>
                        <h3>Lecturer</h3>

                        <form className="w-75" method="POST">
                            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control rounded-pill border-black focus:border-black focus:ring-black"
                                    placeholder="Email"
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control rounded-pill border-black focus:border-black focus:ring-black"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="d-grid">
                                <button
                                    type="submit"
                                    onClick={handleSignin}
                                    className="btn btn-outline-dark rounded-pill"
                                >
                                    LOGIN
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white bg-primary p-5">
                        <h3 className="text-center">Welcome to Website</h3>
                        <p className="mt-3">New here?</p>
                        <Link to="/LecturerSignup">
                            <button className="btn btn-dark rounded-pill px-4">REGISTER</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LecturerSignin;