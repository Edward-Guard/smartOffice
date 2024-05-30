import { useContext, useEffect, useState } from 'react';
import AplicationContext from '../../../Context/AplicationContext';
import SearchBar from '../../SearchBar';
import NewProduct from './NewProduct';
import './StockPage.css';
import TableStock from './TableStock';
import { FilterTable } from '../../../utils/Functions/FilterTable';
import { TypeProductN } from '../../../utils/Types';
import OutTable from './OutStock';

const initialProduct = {
  id: 0,
  nome: '',
  tipo: '',
  marca: '',
  quantidade: 0,
  preco: 0,
};

function StockPage() {
  const { stockDB } = useContext(AplicationContext);
  const [products, setProducts] = useState<TypeProductN[]>(stockDB);
  const [currentProduct, setCurrentProduct] = useState(initialProduct);
  const { handleData } = useContext(AplicationContext);

  const handleFilter = (e: any) => {
    const filter = { text: e.text, selector: e.filter, table: 'stock' };
    const newList: TypeProductN[] = FilterTable({ data: stockDB, filterInfo: filter });
    setProducts(newList);
  };

  useEffect(() => {
    setProducts(stockDB);
  }, [stockDB]);

  const handleStock = (product: TypeProductN, action: string) => {
    if (action === 'add') {
      handleData(product, 'add', 'stock');
    } else if (action === 'remove') {
      handleData(product, 'remove', 'stock');
    } else {
      setCurrentProduct(product);
    }
  };

  const lowStock = products.filter((item) => item.quantidade < 5);

  return (
    <div className="content">
      <SearchBar
        filter1="Nome"
        filter2="Tipo"
        filter3="Marca"
        handleFilter={ handleFilter }
      />
      <NewProduct
        currentProduct={ currentProduct }
        setCurrentProduct={ setCurrentProduct }
        handleStock={ handleStock }
      />
      <div className="maxScreen">
        <TableStock products={ products } handleStock={ handleStock } />
      </div>
      {lowStock.length > 0 ? (
        <div className="outStock">
          <div>PRODUTOS COM ESTOQUE BAIXO</div>
          <OutTable products={ lowStock } />
        </div>
      ) : null}

    </div>
  );
}

export default StockPage;
