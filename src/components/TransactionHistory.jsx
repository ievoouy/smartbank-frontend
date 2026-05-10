import { useEffect, useState } from "react";

import API from "../services/api";

function TransactionHistory() {

    const [transactions, setTransactions] =
        useState([]);

    useEffect(() => {

        fetchTransactions();

    }, []);

    const fetchTransactions = async () => {

        try {

            const response =
                await API.get("/transactions");

            setTransactions(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to fetch transactions");
        }
    };

    return (

        <div>

            <h2>Transaction History</h2>

            {transactions.map((tx) => (

                <div key={tx.id}>

                    <p>Type: {tx.type}</p>

                    <p>Amount: ₹{tx.amount}</p>

                    <p>
                        Time:
                        {" "}
                        {tx.timestamp}
                    </p>

                    <hr />

                </div>
            ))}

        </div>
    );
}

export default TransactionHistory;