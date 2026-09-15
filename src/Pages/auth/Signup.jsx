
import { useNavigate } from "react-router-dom";

import "./Signup.css";

export default function Signup() {

    let navigate = useNavigate();

    return (
        <div className="signup">
            <span className="signup-title">Get started on Flock</span>

            <div className="input-field">

                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="birth-date">
                    <label>Date of birth</label>

                    <select
                        defaultValue=""
                        id="dobDay"
                        name="dobDay"
                    >
                        <option value="" disabled>Day</option>

                        {Array.from({ length: 31 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </select>

                    <select
                        defaultValue=""
                        id="dobMonth"
                        name="dobMonth"
                    >
                        <option value="" disabled>Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>

                    <select defaultValue="">
                        <option value="" disabled>Year</option>

                        {Array.from({ length: 100 }, (_, index) => {
                            const year = new Date().getFullYear() - index;

                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="gender">
                    <label htmlFor="gender">Gender</label>

                    <select defaultValue="" id="gender" name="gender">
                        <option value="" disabled>Select your gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>

                <div className="username">
                    <label htmlFor="username">Mobile number or email address</label>

                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Mobile number or email address"
                    />
                </div>

                <div className="password">
                    <label htmlFor="password">Password</label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Set a password"
                    />

                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Retype the password"
                    />
                </div>
            </div>

            <div className="button">
                <button className="submit">Submit</button>
                <button
                    className="have-account-button"
                    onClick={() => navigate("/login")}
                >
                    I already have an account
                </button>
            </div>

        </div>

    );
}