import React, { useState, useEffect } from "react";
import { AddBudgetForm } from "./components/AddBudgetForm";
import { fetchExpenses } from "./services/api";


function App() {
  const [expenses, setExpenses] = useState([]);

  const loadExpenses = async () => {
    try {
      const { data } = await fetchExpenses();

      setExpenses(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <div className="container">
      <AddBudgetForm loadExpenses={loadExpenses} expenses={expenses} />
    </div>
  );
}

export default App;
