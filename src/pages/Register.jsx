import { useState } from "react";
import API from "../services/api";

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            await API.post("/users", formData);

            alert("Registration Successful");

            window.location.href = "/";

        } catch (error) {

            console.log(error);

            alert("Registration Failed");
        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleRegister}
                className="bg-white p-8 rounded-2xl shadow-lg w-96"
            >

                <h1 className="text-3xl font-bold mb-6 text-center">
                    SmartBank Register
                </h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="w-full border p-3 rounded-lg mb-4"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full border p-3 rounded-lg mb-4"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="w-full border p-3 rounded-lg mb-4"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
                >
                    Register
                </button>

            </form>
        </div>
    );
}

export default Register;