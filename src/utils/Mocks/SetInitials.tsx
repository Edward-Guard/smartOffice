export const InitService = {
  id: 0,
  nome: '',
  data: '',
  funcionario: '',
  txServico: '',
  placa: '',
  modelo: '',
  nomeCliente: '',
  idCliente: '',
  garantia: '',
  produto: [] as { id: number, quantidade: number, preco: number }[],
  descricao: '',
};

export const CurrentProduct = {
  id: 0,
  produto: '',
  quantidade: 0,
  quantidadeMax: 0,
  preco: 0,
};
