function Dashboard() {

    const token = localStorage.getItem("token");

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

                    <h2 className="text-2xl font-bold mb-4">
                        Welcome to SmartBank 🚀
                    </h2>

                    <p className="mb-2">
                        JWT Token Stored:
                    </p>

                    <div className="bg-gray-200 p-4 rounded-lg break-all text-sm">
                        {token}
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;