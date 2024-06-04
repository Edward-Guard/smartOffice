import axios from 'axios';

export const getAllServices = async () => {
  const response = await axios.get('https://localhost:3001/services');
  return response;
};

export const removeService = async (id: number) => {
  const response = await axios.delete(`https://localhost:3001/services/${id}`);
  return response;
};

export const addService = async (data: any) => {
  const response = await axios.post('https://localhost:3001/services', data);
  return response;
};

export const updateService = async (data: any) => {
  const response = await axios.put(`https://localhost:3001/services/${data.id}`, data);
  return response;
};
