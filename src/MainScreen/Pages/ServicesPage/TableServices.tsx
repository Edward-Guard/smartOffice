// import { TypeProduct } from '../../../utils/Types';
import { FaAngleDown, FaRegTimesCircle } from 'react-icons/fa';
import { TypeServiceN } from '../../../utils/Types';
import { amountBill } from '../../../utils/Functions/amoutBill';

type TypeParams = {
  services: TypeServiceN[];
  handleServices: (service: TypeServiceN, action: string) => void;
  showDetails: (service: TypeServiceN) => void;
};

function TableServices({ services, handleServices, showDetails }: TypeParams) {
  const amountService = (service: TypeServiceN) => {
    const { produto, txServico } = service;
    const total = amountBill({ listProducts: produto, serviceTax: Number(txServico) });
    return `R$ ${total.toFixed(2)}`;
  };

  return (
    <table className="tableStock">
      <thead className="titleTable">
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Funcionário</th>
          <th>Moto</th>
          <th>Data</th>
          <th>PREÇO</th>
        </tr>
      </thead>
      <tbody>
        {services.map((item) => (
          <tr key={ item.id } className="rowTable">
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.funcionario}</td>
            <td>{item.veiculo.modelo}</td>
            <td>{item.data}</td>
            <td>
              {amountService(item)}
            </td>
            <td className="chBtns">
              <button
                className="altProduct"
                onClick={ () => showDetails(item) }
              >
                <FaAngleDown />
              </button>
              <button
                className="rmProduct"
                onClick={ () => handleServices(item, 'remove') }
              >
                <FaRegTimesCircle />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableServices;
