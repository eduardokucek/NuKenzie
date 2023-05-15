import { useState } from "react";
import { v4 as uuid } from "uuid";
import TotalMoney from "../TotalMoney";

import "./style.css";

function Form({ listTransactions, setListTransactions, setIsHomePage }) {
  const [descInput, setDescInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [selectValue, setSelectValue] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    const value = selectValue === "Despesa" ? -+valueInput : +valueInput;

    const newTransaction = {
      id: uuid(),
      description: descInput,
      value: value,
      type: selectValue,
    };

    setListTransactions((oldTransactions) => [
      ...oldTransactions,
      newTransaction,
    ]);
  }

  return (
    <div className="containerTotalForm">
      <div className="containerForm">
        <form onSubmit={handleSubmit} className="formContainer">
          <div className="description">
            <label htmlFor="description">Descrição</label>
            <input
              id="desc"
              type="text"
              value={descInput}
              onChange={(event) => setDescInput(event.target.value)}
              placeholder="Digite aqui sua descrição"
            ></input>
            <span>Ex.: Compra de roupas</span>
          </div>
          <div className="value">
            <div>
              <label htmlFor="value">Valor</label>
              <span>R$</span>
              <input
                id="value"
                type="text"
                value={valueInput}
                onChange={(event) => setValueInput(event.target.value)}
                placeholder="1"
              ></input>
            </div>
            <div>
              <label htmlFor="type">Tipo de valor</label>
              <select
                value={selectValue}
                onChange={(event) => setSelectValue(event.target.value)}
              >
                <option>Selecione:</option>
                <option>Entrada</option>
                <option>Despesa</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            onClick={(event) =>
              handleSubmit(event, uuid(), descInput, valueInput, selectValue)
            }
          >
            Inserir valor
          </button>
        </form>
      </div>
      <TotalMoney listTransactions={listTransactions} />
    </div>
  );
}

export default Form;
