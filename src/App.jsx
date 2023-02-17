import { useState } from "react";
import "./App.css";

function App() {
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    let calcBudget;
    switch (formData.products) {
      case "0":
        calcBudget = calcPen(formData.amount);
        break;
      case "1":
        calcBudget = calcSqueeze(formData.amount);
        break;
      case "2":
        calcBudget = calcBarbecue(formData.amount);
        break;
    }

    if (formData.logo == "outline") {
      setBudget(calcBudget);
    } else {
      setBudget(calcBudget * 1.05);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="products">Produto</label>
        <select required name="products" id="products">
          <option value={0}>Canetas, chaveiros e pen-drives</option>
          <option value={1}>Squeeze com gravação até 26mm de largura</option>
          <option value={2}>Kit churrasco (peças de metal)</option>
        </select>
      </div>

      <div className="input-container">
        <label htmlFor="logo">Logo</label>
        <select required name="logo" id="logo">
          <option value={"outline"}>Logo contornado</option>
          <option value={"filled"}>Logo preenchido</option>
        </select>
      </div>

      <div className="input-container">
        <label htmlFor="height">Altura</label>
        <input
          type="number"
          name="height"
          id="height"
          placeholder="Altura em milímetros"
          required
          min={0}
        />
      </div>

      <div className="input-container">
        <label htmlFor="width">Largura</label>
        <input
          type="number"
          name="width"
          id="width"
          placeholder="Largura em milímetros"
          required
          min={0}
        />
      </div>

      <div className="input-container">
        <label htmlFor="amount">Quantidade</label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Quantidade de peças desejadas"
          required
          min={0}
        />
      </div>

      {budget > 0 && <h1>Orçamento sai por: R${budget.toFixed(2)}</h1>}

      <div className="button">
        <input className="submit" type="submit" value="Calcular orçamento" />
      </div>
    </form>
  );
}

function calcPen(amount) {
  if (amount <= 120) return 70;
  if (amount <= 450) return amount * 0.55;
  if (amount <= 500) return 247.5;
  if (amount <= 889) return amount * 0.49;
  if (amount <= 1000) return 440;
  return amount * 0.44;
}

function calcSqueeze(amount) {
  if (amount <= 100) return 70;
  if (amount <= 460) return amount * 0.66;
  if (amount <= 500) return 302.5;
  if (amount <= 910) return amount * 0.6;
  if (amount <= 1000) return 550;
  return amount * 0.55;
}

function calcBarbecue(amount) {
  if (amount <= 100) return 70;
  return amount * 0.6;
}

export default App;
