import React from "react";
import "./app.scss";

import Header from "../header/index";
import Balance from "../balance/index";
import IncomeExpense from "../incomeExpense/index";
import TansactionList from "../tansactionList/index";
import AddTransaction from "../addTransaction/index";
import { GlobalProvider } from "../../context/globalState";

const App = () => {
  return (
    <GlobalProvider>
      <React.Fragment>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TansactionList />
          <AddTransaction />
        </div>
      </React.Fragment>
    </GlobalProvider>
  );
};

export default App;
