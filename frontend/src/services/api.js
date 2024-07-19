import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000/api/',
});

export const fetchExpenses = async () => {
  const response = await api.get('expenses/');
  return response.data;
};

export const createExpense = async (expense) => {
  const response = await api.post('expenses/', expense);
  return response.data;
};

// Add other API methods as needed
