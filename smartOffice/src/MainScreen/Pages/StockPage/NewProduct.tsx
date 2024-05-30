import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import { TypeProductN } from '../../../utils/Types';

type TypeParams = {
  currentProduct: TypeProductN;
  setCurrentProduct: (product: TypeProductN) => void;
  handleStock: (product: TypeProductN, action: string) => void;
};

function NewProduct({ currentProduct, setCurrentProduct, handleStock }: TypeParams) {
  const initialProduct = {
    id: 0,
    nome: '',
    tipo: '',
    marca: '',
    quantidade: 0,
    preco: 0,
  };
  const { id, nome, tipo, marca, quantidade, preco } = currentProduct;

  const handleProduct = (e: any) => {
    const { name, value } = e;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const cancelUpdate = () => {
    setCurrentProduct(initialProduct);
  };
  const confirmUpdate = () => {
    handleStock(currentProduct, 'add');
    cancelUpdate();
  };

  return (
    <div className="newProductBar">
      <input
        name="id"
        value={ id }
        onChange={ (e) => handleProduct(e.target) }
        className="inputNP idProd"
        type="text"
        placeholder="ID"
      />
      <input
        name="nome"
        value={ nome }
        onChange={ (e) => handleProduct(e.target) }
        className="inputNP nameProd"
        type="text"
        placeholder="NOME"
      />
      <input
        name="tipo"
        value={ tipo }
        onChange={ (e) => handleProduct(e.target) }
        className="inputNP "
        type="text"
        placeholder="TIPO"
      />
      <input
        name="marca"
        value={ marca }
        onChange={ (e) => handleProduct(e.target) }
        className="inputNP "
        type="text"
        placeholder="MARCA"
      />
      <input
        name="quantidade"
        value={ quantidade }
        onChange={ (e) => handleProduct(e.target) }
        className="inputNP unProd"
        type="number"
        min={ 0 }
        placeholder="UN"
      />
      <input
        name="preco"
        value={ preco }
        onChange={ (e) => handleProduct(e.target) }
        className="inputNP priceProd"
        type="number"
        min={ 0 }
        placeholder="PREÇO"
      />
      <div className="inputNP btnList">
        <button className="btnAprove" onClick={ confirmUpdate }>
          <FaRegCheckCircle />
        </button>
        <button className="btnCancel " onClick={ cancelUpdate }>
          <FaRegTimesCircle />
        </button>
      </div>
    </div>
  );
}

export default NewProduct;
