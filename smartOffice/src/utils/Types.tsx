export type TypeProduct = {
  id: number;
  nome: string;
  tipo: string;
  marca: string;
  quantidade: number;
  valor: number;
};
// Remover futuramente
export type BasicProduct = {
  id: number, quantidade: number, preco: number
};
export type TypeProductN = {
  id: number;
  nome: string;
  tipo: string;
  marca: string;
  quantidade: number;
  preco: number;
};

export type TypeService = {
  id: number;
  tipo: string;
  data: string;
  funcionario: string;
  valorServico: number;
  cliente: string;
  veiculo: string;
  descricao: string;
  garantia: string;
}; // Remover Futuramente

export type TypeServiceN = {
  id: number;
  nome: string;
  data: string;
  funcionario: string;
  txServico: number;
  produto: BasicProduct[]
  cliente: { nome: string, Id: string };
  veiculo: { placa: string, modelo: string };
  descricao: string;
  garantia: string;
};

export type TypeSeach = {
  search: string;
  type: string;
};

export type TypeSearch = {
  text: string;
  type: string;
};

export type TypeEmployee = {
  id: number,
  nome: string,
  cpf: string,
  contato?: string,
  endereco?: string,
  funcao: string,
  // salario?: number, Quem sabe no futuro
  // dataAdmissao?: string, Quem sabe no futuro
  // dataDemissao?: string, Quem sabe no futuro

};
