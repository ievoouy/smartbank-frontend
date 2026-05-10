import { useState } from "react";

import API from "../services/api";

function TransactionForm({

    accountId,
    type,
    refreshAccounts

}) {

    const [amount, setAmount] =
        useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const endpoint =
                type === "DEPOSIT"
                    ? "/accounts/deposit"
                    : "/accounts/withdraw";

            await API.post(endpoint, {

                accountId,
                amount
            });

            alert(`${type} successful`);

            setAmount("");

            refreshAccounts();

        } catch (error) {

            console.error(error);

            if (error.response?.data?.message) {

                alert(error.response.data.message);

            } else {

                alert(`${type} failed`);
            }
        }
    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="number"
                placeholder={`Enter amount`}
                value={amount}
                onChange={(e) =>
                    setAmount(e.target.value)
                }
                required
            />

            <button type="submit">

                {type}

            </button>

        </form>
    );
}

export default TransactionForm;