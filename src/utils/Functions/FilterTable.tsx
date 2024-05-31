import { TypeProductN, TypeServiceN } from '../Types';

 type Typefilter = {
   text: string,
   selector: keyof TypeProductN | keyof TypeServiceN,
   table: string,
 };

 type TypeParams = {
   data: any,
   filterInfo: Typefilter
 };

export const FilterTable = ({ data, filterInfo } :TypeParams) => {
  if (filterInfo.text === '') return data;
  if (filterInfo.table === 'stock') {
    const lSelector = filterInfo.selector.toLowerCase() as string;
    const products = data as TypeProductN[];
    return products.filter((product) => {
      const value = product[lSelector as keyof TypeProductN] as string;
      return value.toLowerCase().includes(filterInfo.text.toLowerCase());
    });
  }
  if (filterInfo.table === 'service') {
    const lSelector = filterInfo.selector.toLowerCase() as string;
    const services = data as TypeServiceN[];
    return services.filter((service) => {
      const value = service[lSelector as keyof TypeServiceN] as string;
      return value.toLowerCase().includes(filterInfo.text.toLowerCase());
    });
  }
  return data;
  // return data;
//   if (filter.table === 'stock') {
//     return data.filter((item) => item[filter.type]
//       .toLowerCase().includes(filter.text.toLowerCase()));
//   }
};
