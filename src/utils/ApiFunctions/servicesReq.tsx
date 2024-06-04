/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const url = 'https://smartoffice-backend-production.up.railway.app/services';

export const getAllServices = async () => {
  const response = await axios.get(`${url}`);
  return response;
};

export const removeService = async (id: number) => {
  const response = await axios.delete(`${url}/${id}`);
  return response;
};

export const addService = async (data: any) => {
  const response = await axios.post(`${url}`, data);
  return response;
};

export const updateService = async (data: any) => {
  const response = await axios.put(`${url}/${data.id}`, data);
  return response;
};
