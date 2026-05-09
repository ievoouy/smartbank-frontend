import { useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/users/login", {
                email,
                password,
            });

            console.log(response.data);

            localStorage.setItem("token", response.data.token);

            window.location.href = "/dashboard";

        } catch (error) {

            console.log(error);

            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-2xl shadow-lg w-96"
            >

                <h1 className="text-3xl font-bold mb-6 text-center">
                    SmartBank Login
                </h1>

                <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full border p-3 rounded-lg mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full border p-3 rounded-lg mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                >
                    Login
                </button>

                <p className="mt-4 text-center">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-blue-600 font-bold ml-1"
                    >
                        Register
                    </Link>

                </p>

            </form>
        </div>
    );
}

export default Login;