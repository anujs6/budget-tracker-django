import React, { useState, useEffect } from "react";
import { AddBudgetForm } from "./components/AddBudgetForm";
import { fetchExpenses } from "./services/api";
import { Container, Paper, Typography } from "@mui/material";
import "./styles.css";


function App() {
  const [expenses, setExpenses] = useState([]);

  const loadExpenses = async () => {
    try {
      const data = await fetchExpenses();
      console.log("Fetched expenses:", data);
      setExpenses(data); 
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  useEffect(() => {
    console.log("Expenses state updated:", expenses);
  }, [expenses]);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" align="center">Expense Tracker</Typography>
        <br />
        <AddBudgetForm loadExpenses={loadExpenses} expenses={expenses} />
      </Paper>
    </Container>
    
  );
}

export default App;
