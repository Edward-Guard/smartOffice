// produto - id,quantidade,preço
// taxa de serviço

type TypeParams = {
  listProducts: { id: number, quantidade: number, preco: number }[];
  serviceTax: number;
};

export const amountBill = ({ listProducts, serviceTax } : TypeParams) => {
  const amoutProduct = listProducts.map((item) => item.quantidade * item.preco);
  const totalProduct = amoutProduct.reduce((acc, cur) => acc + cur, 0);
  return totalProduct + serviceTax;
};
