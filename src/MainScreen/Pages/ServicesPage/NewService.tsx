/* eslint-disable jsx-a11y/no-autofocus */
import { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useHotkeys } from 'react-hotkeys-hook';
import { FaCartPlus, FaCartArrowDown } from 'react-icons/fa';
import AplicationContext from '../../../Context/AplicationContext';
import { amountBill } from '../../../utils/Functions/amoutBill';
import { CurrentProduct, InitService } from '../../../utils/Mocks/SetInitials';
import { getAllStock } from '../../../utils/ApiFunctions/stockReq';

const formatDate = 'YYYY-MM-DD';

type TypeParams = {
  cancelUpdate: () => void;
};

function NewService({ cancelUpdate }: TypeParams) {
  useHotkeys('esc', () => cancelService());
  useHotkeys('enter', () => confirmService());

  const { stockDB, handleData, employeesDB } = useContext(AplicationContext);
  const { register, getValues } = useForm({ defaultValues: InitService });

  const [service, setService] = useState(InitService);
  const [currentProd, setCurrentProd] = useState(CurrentProduct);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    const handleAmount = () => {
      const { produto, txServico } = service;
      const total = amountBill({ listProducts: produto, serviceTax: Number(txServico) });
      setAmount(total);
    };
    handleAmount();
  }, [service]);

  const handleChange = (e: any) => {
    const newService = { ...service, [e.name]: e.value };
    setService(newService);
  };

  const confirmService = () => {
    const { id, garantia, funcionario, produto, txServico } = service;
    const { nome, nomeCliente, placa, modelo, idCliente, descricao } = getValues();
    const newService = {
      id,
      nome,
      nomeCliente,
      funcionario,
      placa,
      modelo,
      idCliente,
      produto,
      txServico,
      descricao };
    const actual = moment().format(formatDate);
    const formatedGarantia = moment(actual).add(garantia, 'days').format(formatDate);

    const alterDataService = { ...newService, garantia: formatedGarantia, data: actual };

    handleData(alterDataService, 'add', 'services');
    resetInput();
  };

  const cancelService = () => {
    resetInput();
  };

  const resetInput = () => {
    setService(InitService);
    setCurrentProd(CurrentProduct);
    cancelUpdate();
  };

  const printOut = async () => {
    const { status } = await getAllStock();
    console.log(status);
  };

  const addProduct = () => {
    const { id, quantidade, preco } = currentProd;
    const newProduct = { id, quantidade, preco };
    const newService = { ...service, produto: [...service.produto, newProduct] };

    setCurrentProd(CurrentProduct);
    setService(newService);
  };

  const removeProduct = (id: number) => {
    const newProduct = service.produto.filter((item) => item.id !== id);
    const newService = { ...service, produto: newProduct };
    setService(newService);
  };

  const handleCurrent = (e: any) => {
    const { name, value } = e.target;
    const prod = stockDB.find((item) => item.id === Number(value));
    if (name === 'select' && prod) {
      const { id, nome, quantidade, marca, tipo, preco } = prod;
      const nomeProduct = `${nome} - ${tipo} - ${marca}`;
      const newCurrent = {
        id, produto: nomeProduct, quantidade: 0, quantidadeMax: quantidade, preco,
      };
      setCurrentProd(newCurrent);
    }
    if (name === 'quantidade') {
      const newCurrent = { ...currentProd, quantidade: value };
      setCurrentProd(newCurrent);
    }
  };

  return (
    <div className="newServiceDiv">
      <div className="serviceNS lineInput">
        <input
          type="text"
          placeholder="SERVIÇO"
          { ...register('nome') }
          autoFocus
        />
        <select
          name="funcionario"
          value={ service.funcionario }
          onChange={ (e) => handleChange(e.target) }
        >
          <option disabled value="">Funcionário:</option>
          {employeesDB.map((employee) => {
            const { id, nome } = employee;
            return (
              <option value={ nome } key={ id }>
                {nome}
              </option>
            );
          })}
        </select>
      </div>
      <div className="clienteNS lineInput">
        <input type="text" placeholder="CLIENTE" { ...register('nomeCliente') } />
        <input type="text" placeholder="CPF" { ...register('idCliente') } />
      </div>
      <div className="veiculoNS lineInput">
        <input type="text" placeholder="PLACA" { ...register('placa') } />
        <input type="text" placeholder="MODELO" { ...register('modelo') } />
        <input type="text" placeholder="GARANTIA" { ...register('garantia') } />
      </div>
      <div className="pricesNS lineInput">
        <div>PREÇO </div>
        <input
          name="txServico"
          type="number"
          min={ 0 }
          value={ service.txServico }
          onChange={ (e) => handleChange(e.target) }
          placeholder="TAXA"
        />
        <div>{`TOTAL: R$ ${amount.toFixed(2)}`}</div>
      </div>
      <div className="productsNS">
        <div className="titleAddProd">PRODUTOS</div>
        <div className="addProd">
          <select
            className="selectProd"
            name="select"
            onChange={ (e) => handleCurrent(e) }
            value={ currentProd.id }
          >
            <option value={ 0 } disabled>Selecione um produto:</option>
            {stockDB.map((item) => {
              const { id, nome, marca, tipo } = item;
              return (
                <option value={ id } key={ id }>
                  {`${nome} - ${tipo} - ${marca}`}
                </option>
              );
            })}
          </select>
          <input
            className="quantProd"
            name="quantidade"
            type="number"
            min={ 0 }
            max={ currentProd.quantidadeMax }
            onChange={ (e) => handleCurrent(e) }
            value={ currentProd.quantidade }
            placeholder="UN"
          />
          <div className="priceProd">
            {`R$ ${(currentProd.preco * currentProd.quantidade).toFixed(2)}`}
          </div>
          <button onClick={ addProduct }>
            <FaCartPlus />
          </button>
        </div>
        <div>
          {service.produto.map((item) => {
            const { id, quantidade, preco } = item;
            const product = stockDB.find((prod) => prod.id === id);
            if (!product) return null;
            const { nome, marca, tipo } = product;
            return (
              <div className="listProds" key={ id }>
                <div>{`${quantidade}`}</div>
                <div>{`${nome}-${tipo}-${marca} `}</div>
                <div>{`R$ ${(preco * quantidade).toFixed(2)}`}</div>
                <button onClick={ () => removeProduct(id) }>
                  <FaCartArrowDown />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <textarea className="descNS" placeholder="DESCRIÇÃO" { ...register('descricao') } />
      <div className="btnNewService">
        <button className="confirm" onClick={ confirmService }>Confirmar</button>
        <button className="print" onClick={ printOut }>Imprimir</button>
        <button className="cancel" onClick={ cancelService }>Cancelar</button>
      </div>
    </div>

  );
}

export default NewService;
