import styles from "../styles/Main.module.css";
import login_styles from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import earthSrc from "../plainEarth.png";

const Login = () => {
    const [data, setData] = useState({ status: "active" });

    const handeInputChange = (key, value) => {
        let temp_data = data;
        temp_data[key] = value;
        setData(temp_data);
    };

    const signup = () => {
        console.log("data: ", data);
        fetch("http://localhost:8080/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then((result) => {
                console.log("Success:", result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <section>
            <div className={styles.smallMargin}>Margin</div>
            <div className={login_styles.loginContainer}>
                <div className={login_styles.titleContainer}>
                    <h1>Create Your Account</h1>
                    <p>Join Polaris to get started</p>
                </div>
                <div>
                    <label className={login_styles.required}>Full Name</label>
                    <input
                        id="full_name_input"
                        onChange={(e) => {
                            handeInputChange("full_name", e.target.value);
                        }}
                        placeholder=""
                        required
                    ></input>
                </div>
                <div>
                    <label className={login_styles.required}>Username</label>
                    <input
                        id="username_input"
                        onChange={(e) => {
                            handeInputChange("username", e.target.value);
                        }}
                        placeholder=""
                        required
                    ></input>
                </div>
                <div>
                    <label className={login_styles.required}>Email</label>
                    <input
                        id="email_input"
                        onChange={(e) => {
                            handeInputChange("email", e.target.value);
                        }}
                        placeholder=""
                        required
                    ></input>
                </div>

                <div>
                    <label className={login_styles.required}>Password</label>
                    <input
                        id="password_input"
                        onChange={(e) => {
                            handeInputChange("password", e.target.value);
                        }}
                        placeholder=""
                        required
                    ></input>
                </div>
                <div>
                    <label id="confirm_password_input" className={login_styles.required}>
                        Confirm Password
                    </label>
                    <input placeholder="" required></input>
                </div>
                <div>
                    <a
                        onClick={() => {
                            signup();
                        }}
                        className={login_styles.submitLogin}
                    >
                        Create Account
                    </a>
                </div>
                <div>
                    <p>
                        By signing up, you agree to our <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>
                    </p>
                </div>
                <div>
                    <p>
                        Already have an account? <Link to={"/login"}>Sign in</Link>
                    </p>
                </div>
            </div>
            <div className={styles.smallMargin}>Margin</div>
            <div className={login_styles.earthContainer}>
                <img className={login_styles.earth} src={earthSrc}></img>
            </div>
        </section>
    );
};

export default Login;
