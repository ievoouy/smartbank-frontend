import { useState } from "react";

import API from "../services/api";

function TransferForm({ refreshAccounts }) {

    const [fromAccountId, setFromAccountId] =
        useState("");

    const [toAccountId, setToAccountId] =
        useState("");

    const [amount, setAmount] =
        useState("");

    const handleTransfer = async (e) => {

        e.preventDefault();

        try {

            await API.post(

                `/accounts/transfer?fromAccountId=${fromAccountId}&toAccountId=${toAccountId}&amount=${amount}`

            );

            alert("Transfer successful");

            setFromAccountId("");
            setToAccountId("");
            setAmount("");

            refreshAccounts();

        } catch (error) {

            console.error(error);

            if (error.response?.data?.message) {

                alert(error.response.data.message);

            } else {

                alert("Transfer failed");
            }
        }
    };

    return (

        <div>

            <h2>Transfer Money</h2>

            <form onSubmit={handleTransfer}>

                <input
                    type="number"
                    placeholder="From Account ID"
                    value={fromAccountId}
                    onChange={(e) =>
                        setFromAccountId(e.target.value)
                    }
                    required
                />

                <input
                    type="number"
                    placeholder="To Account ID"
                    value={toAccountId}
                    onChange={(e) =>
                        setToAccountId(e.target.value)
                    }
                    required
                />

                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) =>
                        setAmount(e.target.value)
                    }
                    required
                />

                <button type="submit">
                    Transfer
                </button>

            </form>

        </div>
    );
}

export default TransferForm;