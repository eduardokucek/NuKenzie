import Card from "../Card";
import "./style.css";
import emptycard from "../../assets/emptycard.svg";

function List({ listTransactions, setListTransactions }) {
  function handleTransaction(removeTransaction) {
    setListTransactions(
      listTransactions.filter(
        (transaction) => transaction.id !== removeTransaction.id
      )
    );
  }

  return (
    <div className="containerList">
      <p>Resumo financeiro</p>
      {listTransactions.length <= 0 ? (
        <ul className="emptyCard">
          <p>Você não possui lançamentos</p>
          <li>
            <img src={emptycard} alt="sem lançamento"></img>
          </li>
          <li>
            <img src={emptycard} alt="sem lançamento"></img>
          </li>
          <li>
            <img src={emptycard} alt="sem lançamento"></img>
          </li>
        </ul>
      ) : (
        <ul>
          {listTransactions.map((transaction) => (
            <Card
              key={transaction.id}
              transaction={transaction}
              handleTransaction={handleTransaction}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
