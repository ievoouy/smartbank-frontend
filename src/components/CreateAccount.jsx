import { useState } from "react";

import API from "../services/api";

function CreateAccount({ refreshAccounts }) {

    const [accountType, setAccountType] =
        useState("SAVINGS");

    const [initialBalance, setInitialBalance] =
        useState("");

    const [userId, setUserId] =
        useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/accounts", {

                accountType,
                initialBalance,
                userId
            });

            alert("Account created successfully");

            setInitialBalance("");
            setUserId("");

            refreshAccounts();

        } catch (error) {

            console.error(error);

            alert("Failed to create account");
        }
    };

    return (

        <div>

            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="number"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) =>
                        setUserId(e.target.value)
                    }
                    required
                />

                <select
                    value={accountType}
                    onChange={(e) =>
                        setAccountType(e.target.value)
                    }
                >

                    <option value="SAVINGS">
                        SAVINGS
                    </option>

                    <option value="CURRENT">
                        CURRENT
                    </option>

                </select>

                <input
                    type="number"
                    placeholder="Initial Balance"
                    value={initialBalance}
                    onChange={(e) =>
                        setInitialBalance(e.target.value)
                    }
                    required
                />

                <button type="submit">
                    Create
                </button>

            </form>

        </div>
    );
}

export default CreateAccount;