import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions, removeTransaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={transaction.type}>
            {transaction.text} - ${Math.abs(transaction.amount)}
            <button onClick={() => removeTransaction(transaction.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
