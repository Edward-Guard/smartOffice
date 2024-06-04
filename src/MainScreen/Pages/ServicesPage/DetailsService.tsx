/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { TypeServiceN } from '../../../utils/Types';
import AplicationContext from '../../../Context/AplicationContext';
import { amountBill } from '../../../utils/Functions/amoutBill';

type DetailsServiceProps = {
  service: TypeServiceN;
  setDatailsService: (value: boolean) => void;
};

function DetailsService({ setDatailsService, service }: DetailsServiceProps) {
  const { stockDB } = useContext(AplicationContext);
  const closeDetails = () => {
    setDatailsService(false);
  };
  const returnProduct = (product: any) => {
    const findProduct = stockDB.find((item) => item.id === product.id);
    if (findProduct) {
      const { nome, preco } = findProduct;
      return (
        <>
          <div>{nome}</div>
          <div>{`${product.quantidade} Un`}</div>
          <div>{`R$ ${preco.toFixed(2)}`}</div>
        </>
      );
    }
    return null;
  };

  const convert = (date: string) => {
    const dateSplit = date.split('-');
    return `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
  };

  const priceProducts = () => {
    const amount = amountBill({ listProducts: service.produto, serviceTax: 0 });
    return amount;
  };

  const amoutProduct = priceProducts().toFixed(2);

  const { nome, funcionario, data, garantia, cliente, veiculo,
    produto, txServico } = service;

  return (
    <div className="detailsService">
      <div className="closeLine">
        <button className="closeDetails" onClick={ closeDetails }>
          x
        </button>
      </div>
      <div className="infoGrid">
        <div className="labelDetail">
          <div className="nameDetails">SERVIÇO: </div>
          <div className="infoDetails">{nome}</div>
        </div>
        <div className="labelDetail">
          <div className="nameDetails">FUNCIONARIO: </div>
          <div className="infoDetails">{funcionario}</div>
        </div>
        <div className="labelDetail">
          <div className="nameDetails">Garantia: </div>
          <div className="infoDetails">{`${convert(data)}-${convert(garantia)}`}</div>
        </div>
        <div className="labelDetail">
          <div className="nameDetails">CLIENTE: </div>
          <div className="infoDetails">{`${cliente.nome} | ${cliente.Id}`}</div>
        </div>
        <div className="labelDetail">
          <div className="nameDetails">MOTO: </div>
          <div className="infoDetails">{`${veiculo.modelo} | ${veiculo.placa}`}</div>
        </div>
        <div className="labelDetail">
          <div className="nameTxDetails">Taxa de Serviço:</div>
          <div className="infoTxDetails">{`R$ ${Number(txServico).toFixed(2)}`}</div>
        </div>
      </div>

      <div className="productsList">
        <div className="titleList">
          <div className="titleListItem">PRODUTOS</div>
          <div className="titleListItem">{`TOTAL R$ ${amoutProduct}`}</div>
        </div>
        <div>
          {produto.map((item) => (
            <div className="productItem" key={ item.id }>{returnProduct(item)}</div>
          ))}
        </div>
      </div>
      <div>
        {`Detalhes: ${service.descricao}`}
      </div>
    </div>
  );
}

export default DetailsService;
