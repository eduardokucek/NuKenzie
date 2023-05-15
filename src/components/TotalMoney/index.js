import "./style.css";

function TotalMoney({ listTransactions }) {
  const totalMoney = listTransactions
    .map((transaction) => parseInt(transaction.value))
    .reduce((previusValue, currentValue) => previusValue + currentValue, 0);

  return (
    <div className="totalContainer">
      {listTransactions.length <= 0 ? (
        <></>
      ) : (
        <div className="totalMoney">
          <div>
            <p>Valor total:</p>
            <p id="totalValue">R$&nbsp;{totalMoney}</p>
          </div>
          <span>O valor se refere ao saldo</span>
        </div>
      )}
    </div>
  );
}

export default TotalMoney;
