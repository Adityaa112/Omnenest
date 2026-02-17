import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

function Auth() {
    const [isLogIn, setIsLogIn] = useState(false);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogIn) {
            console.log('Login: ', { email, password });
            navigate('/Dashboard');
        } else {
            console.log("Signup: ", { name, email, password });
        }
    };

    const toggleMode = () => {
        setIsLogIn(!isLogIn);
    }
    return (
        <div>
            <h1>{isLogIn ? "Login" : "Sign Up"}</h1>
            <form onSubmit={handleSubmit} >
            {!isLogIn && (
                <div>
                    <label >Name: </label>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </div>)
            }
            <div>
                <label >Email: </label>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
            </div>
            
            <div>
                <label >Password: </label>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
            </div>
            <button type="submit">{isLogIn ? "Login" : "Sign Up"}</button>
            </form>

            <p>
                {isLogIn ? "Don't have an account?" : "Already have an account?"}
                <button onClick={toggleMode}>{isLogIn ? "Sign Up" : "Login"}</button>
            </p>
        </div>
    );
}

export default Auth;