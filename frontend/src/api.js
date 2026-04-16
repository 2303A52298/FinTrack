import axios from "axios";

const API = "http://localhost:5000/api";

export const getExpenses    = ()         => axios.get(`${API}/expenses`);
export const addExpense     = (data)     => axios.post(`${API}/expenses`, data);
export const deleteExpense  = (id)       => axios.delete(`${API}/expenses/${id}`);