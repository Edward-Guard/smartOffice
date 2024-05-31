import { TypeServiceN } from '../Types';

export const FilterByEmployee = (list:TypeServiceN[], employee:string) => {
  return list.filter((service) => service.funcionario === employee);
};
