import { useEffect, useState } from "react";
import API from "../services/api";


function Dashboard() {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {

        fetchAccounts();

    }, []);

    const fetchAccounts = async () => {

        try {

            const response =
                await API.get("/accounts");

            setAccounts(response.data);

        } catch (error) {

            console.log(error);

            alert("Failed to fetch accounts");
        }
    };

    const handleLogout = () => {

        localStorage.removeItem("token");

        window.location.href = "/";
    };

    return (

        <div className="min-h-screen bg-gray-100">

            <div className="bg-blue-600 text-white p-4 flex justify-between">

                <h1 className="text-2xl font-bold">
                    SmartBank Dashboard
                </h1>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 px-4 py-2 rounded-lg"
                >
                    Logout
                </button>

            </div>

            <div className="p-10">

                <div className="bg-white rounded-2xl shadow-lg p-6">

                    <h2 className="text-2xl font-bold mb-6">
                        Your Accounts
                    </h2>

                    {
                        accounts.length === 0
                            ? (
                                <p>No Accounts Found</p>
                            )
                            : (
                                accounts.map((account) => (

                                    <div
                                        key={account.id}
                                        className="border p-4 rounded-lg mb-4"
                                    >

                                        <p>
                                            <strong>Account Number:</strong>
                                            {" "}
                                            {account.accountNumber}
                                        </p>

                                        <p>
                                            <strong>Balance:</strong>
                                            {" "}
                                            ₹{account.balance}
                                        </p>

                                        <p>
                                            <strong>Type:</strong>
                                            {" "}
                                            {account.accountType}
                                        </p>

                                    </div>
                                ))
                            )
                    }

                </div>

            </div>

        </div>
    );
}

export default Dashboard;