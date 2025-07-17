import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LecturerSignup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        if (!name || !mail || !password) {
            setMessage("Please fill all the fields");
            setMessageType("error");
            setTimeout(() => setMessage(""), 2000);
            return;
        }

        if (password.length < 6) {
            setMessage("Password must be at least 6 characters long");
            setMessageType("error");
            setTimeout(() => setMessage(""), 2000);
            return;
        }

        const allData = { name, mail, password };

        const url = 'https://final-final-project-4.onrender.com/submit';
        axios.post(url, allData)
            .then((res) => {
                console.log(res.data);
                if (res.status === 201 || res.status === 200) {
                    setMessage("User Created Successfully");
                    setMessageType("success");
                    setTimeout(() => navigate("/lecturerSignin"), 3000);
                }
            })
            .catch((err) => {
                console.log(err);
                setMessage("User Already Exists");
                setMessageType("error");
                setTimeout(() => setMessage(""), 3000);
            });
    };

    return (
        <>
            <div className="container-fluid vh-100">
                <div className="row h-100">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white p-5">
                        <h3 className="mb-4">Create Account</h3>
                        <h2>LECTURE</h2>

                        {message && (
                            <p
                                className={`alert mt-3 text-center ${
                                    messageType === "success" ? "alert-success" : "alert-danger"
                                }`}
                            >
                                {message}
                            </p>
                        )}
                        <form className="w-75" method="POST" action={LecturerSignup}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control rounded-pill border-black focus:border-black focus:ring-black"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
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
                                    onClick={handleSignup}
                                    className="btn btn-outline-dark rounded-pill"
                                >
                                    REGISTER
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white bg-primary p-5">
                        <h3 className="text-center">Welcome back to<br />Website</h3>
                        <p className="mt-3">Already have an account?</p>
                        <Link to="/LecturerSignin">
                            <button className="btn btn-dark rounded-pill px-4">LOGIN</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LecturerSignup;