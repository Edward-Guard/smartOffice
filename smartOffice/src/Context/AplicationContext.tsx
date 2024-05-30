import { createContext } from 'react';
// import clientsDB from '../utils/DB/ClientsDB';
import { TypeEmployee, TypeProductN, TypeServiceN } from '../utils/Types';

type TypeAplication = {
  stockDB: TypeProductN[];
  servicesDB: TypeServiceN[];
  employeesDB: TypeEmployee[];
  handleData: (data: any, action: string, table: string) => void;
};

const AplicationContext = createContext({ } as TypeAplication);

export default AplicationContext;
