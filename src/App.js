import { useState } from "react";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import TotalMoney from "./components/TotalMoney";

import "./style/App.css";
import List from "./components/List";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [isHomePage, setIsHomePage] = useState("HomePage");

  return (
    <main className="App">
      {isHomePage === "HomePage" ? (
        <HomePage setIsHomePage={setIsHomePage} />
      ) : (
        <>
          <Header setIsHomePage={setIsHomePage} />
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setIsHomePage={setIsHomePage}
          />
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </>
      )}
    </main>
  );
}

export default App;
