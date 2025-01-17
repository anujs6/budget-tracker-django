import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000/api/',
});

export const fetchExpenses = async () => {
  try {
    const response = await api.get('expenses/');
    return response.data;
  } catch (e) {
    console.error("Error fetching expenses:", e);
    return[];
  }
  
};

export const createExpense = async (expense) => {
  try {
    const response = await api.post('expenses/', expense);
    return response.data;
  } catch (e) {
    console.error("Error creating an expense:", e);
    return[];
  }
  
};

export const deleteExpense = async (id) => {
  try {
    const response = await api.delete(`expenses/${id}/`);
    return response.data;
  } catch (e) {
    console.error("Error deleting an expense:", e);
    return[];
  }
};

// Add other API methods as needed
