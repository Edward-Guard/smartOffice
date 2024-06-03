/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const url = 'smartoffice-backend-production.up.railway.app'

export const getAllServices = async () => {
  const response = await axios.get(`https://${url}/services`);
  return response;
};

export const removeService = async (id: number) => {
  const response = await axios.delete(`https://${url}/${id}`);
  return response;
};

export const addService = async (data: any) => {
  const response = await axios.post(`https://${url}/services`, data);
  return response;
};

export const updateService = async (data: any) => {
  const response = await axios.put(`https://${url}/${data.id}`, data);
  return response;
};
