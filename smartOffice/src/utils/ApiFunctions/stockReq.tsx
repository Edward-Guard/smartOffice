import axios from 'axios';

export const getAllStock = async () => {
  const response = await axios.get('http://localhost:3001/stock');
  return response;
};

export const removeProduct = async (id: number) => {
  const response = await axios.delete(`http://localhost:3001/stock/${id}`);
  return response;
};

export const addProduct = async (data: any) => {
  const response = await axios.post('http://localhost:3001/stock', data);
  return response;
};

export const updateProduct = async (data: any) => {
  const response = await axios.put(`http://localhost:3001/stock/${data.id}`, data);
  return response;
};
