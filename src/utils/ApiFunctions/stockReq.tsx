/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const url = 'https://smartoffice-backend-production.up.railway.app/stock';

export const getAllStock = async () => {
  const response = await axios.get(`${url}`);
  return response;
};

export const removeProduct = async (id: number) => {
  const response = await axios.delete(`${url}/${id}`);
  return response;
};

export const addProduct = async (data: any) => {
  const response = await axios.post(`${url}`, data);
  return response;
};

export const updateProduct = async (data: any) => {
  const response = await axios.put(`${url}/${data.id}`, data);
  return response;
};
