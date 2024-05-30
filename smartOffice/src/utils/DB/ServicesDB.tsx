import { TypeServiceN } from '../Types';

const idMaria = '713.111.210-05';

const serviceDB : TypeServiceN[] = [
  {
    id: 1,
    nome: 'Manutenção preventiva',
    data: '2024-05-01',
    funcionario: 'João',
    txServico: 260.00,
    produto: [{ id: 2, quantidade: 1, preco: 38.00 }],
    cliente: { nome: 'Maria', Id: idMaria },
    veiculo: { placa: 'JUB-3795', modelo: 'CG 160' },
    descricao: 'Troca de óleo e filtro',
    garantia: '2024-08-01',
  },
  {
    id: 2,
    nome: 'Manutenção corretiva',
    data: '2024-05-05',
    funcionario: 'José',
    txServico: 80.00,
    produto: [{ id: 5, quantidade: 2, preco: 50.90 }],
    cliente: { nome: 'Joao', Id: '895.380.700-03' },
    veiculo: { placa: 'HVI-9238', modelo: 'XRE 300' },
    descricao: 'Troca de lâmpada',
    garantia: '2024-06-05',
  },
  // {
  //   id: 3,
  //   nome: 'Manutenção preventiva',
  //   data: '2024-05-08',
  //   funcionario: 'José',
  //   txServico: 50.00,
  //   produto: [{ id: 2, quantidade: 1, preco: 38.00 }],
  //   cliente: { nome: 'Antonio', Id: '845.166.100-94' },
  //   veiculo: { placa: 'MXE-5329', modelo: 'CB 500' },
  //   descricao: 'Troca de óleo e filtro',
  //   garantia: '2024-11-08',
  // },
  // {
  //   id: 4,
  //   nome: 'Manutenção corretiva',
  //   data: '2024-05-10',
  //   funcionario: 'João',
  //   txServico: 60.00,
  //   produto: [{ id: 5, quantidade: 2, preco: 50.90 }],
  //   cliente: { nome: 'Maria', Id: idMaria },
  //   veiculo: { placa: 'HVI-9238', modelo: 'XRE 300' },
  //   descricao: 'Troca de lâmpada do farol frontal',
  //   garantia: '2024-08-10',
  // },
  // {
  //   id: 5,
  //   nome: 'Venda de Peça',
  //   data: '2024-05-10',
  //   funcionario: 'Henrique',
  //   txServico: 50.00,
  //   produto: [
  //     { id: 4, quantidade: 1, preco: 85.00 },
  //     { id: 5, quantidade: 2, preco: 50.90 },
  //     { id: 2, quantidade: 1, preco: 38.00 }],
  //   cliente: { nome: 'Maria', Id: idMaria },
  //   veiculo: { placa: 'MWS-9605', modelo: 'CG 160' },
  //   descricao: 'Venda e troca de um Kit de transmissão.',
  //   garantia: '2024-07-10',
  // },
];

export default serviceDB;
