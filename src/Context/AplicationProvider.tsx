/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import axios from 'axios';
import AplicationContext from './AplicationContext';
import servicesDB from '../utils/DB/ServicesDB';
import stockDB from '../utils/DB/StockDB';
import employeesDB from '../utils/DB/EmployeesDB';
import { addProduct, removeProduct, updateProduct } from '../utils/ApiFunctions/stockReq';
import { addService, removeService } from '../utils/ApiFunctions/servicesReq';

type ThemeProviderProps = {
  children: React.ReactNode;
};

function AplicationProvider({ children }: ThemeProviderProps) {
  const [listProducts, setListProducts] = useState(stockDB);
  const [listServices, setListServices] = useState(servicesDB);
  const [listEmployees] = useState(employeesDB);
  const url = 'https://smartoffice-backend-production.up.railway.app/';

  useEffect(() => {
    async function inicio() {
      const stock = await axios.get(`${url}stock`);
      const service = await axios.get(`${url}services`);

      if (stock.status === 200) setListProducts(stock.data);
      if (service.status === 200) setListServices(service.data);
    }

    inicio();
  }, []);

  function delay(){
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  const setStock = async () => {
    const { status, data } = await axios.get(`${url}stock`);
    if (status === 200) { setListProducts(data); }
  };
  const setServices = async () => {
    const { status, data } = await axios.get(`${url}services`);
    if (status === 200) { setListServices(data); }
  };

  const handleData = async (data: any, action: string, table: string) => {
    if (table === 'stock' && action === 'remove') {
      await removeProduct(data.id);
    }
    if (table === 'stock' && action === 'add') {
      const find = listProducts.find((item) => Number(item.id) === Number(data.id));
      if (find === undefined) addProduct(data);
      if (find !== undefined) updateProduct(data);
    }
    if (table === 'services' && action === 'remove') {
      await removeService(data.id);
    }
    if (table === 'services' && action === 'add') {
      const { nomeCliente, modelo, placa, idCliente, produto } = data;

      produto.forEach(async (item :any) => {
        const { id, quantidade } = item;
        const oldProduct = listProducts.find((prod) => prod.id === id);
        if (oldProduct === undefined) return;
        const newP = { ...oldProduct, quantidade: oldProduct.quantidade - quantidade };
        await updateProduct(newP);
      });

      const newService = { ...data,
        cliente: { nome: nomeCliente, Id: idCliente },
        veiculo: { placa, modelo },
        produto
      };
       await addService(newService);
    }
    await delay();
    await setStock();
    await setServices();
  };

  return (
    <AplicationContext.Provider
      value={ {
        stockDB: listProducts,
        servicesDB: listServices,
        employeesDB: listEmployees,
        handleData,
      } }
    >
      {children}
    </AplicationContext.Provider>
  );
}

export default AplicationProvider;
