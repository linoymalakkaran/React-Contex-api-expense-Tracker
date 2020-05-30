import React, { useContext } from "react";
import "./tansactionList.scss";

import { GlobalContext } from '../../context/globalState';
import Transaction from "../transaction/index";

const TansactionList = (props) => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="component-tansaction-list">
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => 
          (<Transaction key={transaction.id} transaction={transaction} />)
        )}
      </ul>
    </div>
  );
};

export default TansactionList;
