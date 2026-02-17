import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

function Auth() {
    const [isLogIn, setIsLogIn] = useState(false);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const googleEmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


    // Email / Password (placeholder logic)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!googleEmailRegex.test(email)) {
            alert("Only @gmail.com email addresses are allowed");
            return;
        }


        if (isLogIn) {
            console.log("Login:", { email, password });
        } else {
            console.log("Signup:", { name, email, password });
        }

        navigate("/Dashboard");
    };

    // ✅ Google Login
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            console.log("Google User:", {
                name: user.displayName,
                email: user.email,
                uid: user.uid,
            });

            navigate("/Dashboard");
        } catch (error) {
            console.error("Google login error:", error.message);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto" }}>
            <h1>{isLogIn ? "Login" : "Sign Up"}</h1>

            <form onSubmit={handleSubmit}>
                {!isLogIn && (
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                )}

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                        title="Only @gmail.com email addresses are allowed"
                        required
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">
                    {isLogIn ? "Login" : "Sign Up"}
                </button>
            </form>

            <hr />

            {/* 🔐 Google Auth Button */}
            <button onClick={handleGoogleLogin}>
                Continue with Google
            </button>

            <p>
                {isLogIn ? "Don't have an account?" : "Already have an account?"}
                <button onClick={() => setIsLogIn(!isLogIn)}>
                    {isLogIn ? "Sign Up" : "Login"}
                </button>
            </p>
        </div>
    );
}

export default Auth;
