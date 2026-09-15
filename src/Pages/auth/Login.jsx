
import { useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login() {

    let navigate = useNavigate();

    return (
        <div className="login">
            <span className="login-title">Log in to Flock</span>

            <div className="input-field">
                <input type="text" placeholder="Email address or Mobile number" />
                <input type="password" placeholder="Password" />
            </div>
            <div className="button">
                <button className="login-button">Log in</button>

                <button
                    className="create-button"
                    onClick={() => navigate("/signup")}
                >
                    Create new account
                </button>
            </div>
        </div>
    );
}