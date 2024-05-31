import { TypeProductN } from '../../../utils/Types';

type TypeParams = {
  products: TypeProductN[];

};

function OutTable({ products }: TypeParams) {
  return (
    <table>
      <thead>
        <tr>
          <th>NOME</th>
          <th>QUANTIDADE</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>{item.nome}</td>
            <td>{item.quantidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OutTable;
