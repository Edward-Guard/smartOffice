// import { TypeProduct } from '../../../utils/Types';

import { FaPen, FaRegTimesCircle } from 'react-icons/fa';
import { TypeProductN } from '../../../utils/Types';

type TypeParams = {
  products: TypeProductN[];
  handleStock: (product: TypeProductN, action: string) => void;
};

function TableStock({ products, handleStock }: TypeParams) {
  return (
    <table className="tableStock">
      <thead className="titleTable">
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Marca</th>
          <th>Quantidade</th>
          <th>PREÇO</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id} className="rowTable">
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.tipo}</td>
            <td>{item.marca}</td>
            <td>{item.quantidade}</td>
            <td>
              R$
              {Number(item.preco).toFixed(2)}
            </td>
            <td className="chBtns">
              <button
                className="altProduct"
                onClick={() => handleStock(item, 'update')}
              >
                <FaPen />
              </button>
              <button
                className="rmProduct"
                onClick={() => handleStock(item, 'remove')}
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

export default TableStock;
