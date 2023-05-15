import "./style.css";

function Card({ transaction, handleTransaction }) {
  return (
    <li className="cardTransaction">
      <div
        className={
          transaction.type === "Entrada"
            ? "typeTransaction"
            : "typeTransaction-out"
        }
      ></div>
      <div className="transactionDetails">
        <div>
          <p id="desc">{transaction.description}</p>
        </div>

        <p id="type">{transaction.type}</p>
        <div>
          <p id="value">R$&nbsp;{transaction.value}</p>
        </div>
        <button
          type="button"
          onClick={() => handleTransaction(transaction)}
        ></button>
      </div>
    </li>
  );
}

export default Card;
