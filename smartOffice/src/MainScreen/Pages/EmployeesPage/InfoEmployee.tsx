import moment from 'moment';
import { useState } from 'react';
import { TypeEmployee, TypeServiceN } from '../../../utils/Types';
import { amountBill } from '../../../utils/Functions/amoutBill';
import './employee.css';

type TypeParams = {
  employee: TypeEmployee;
  services: TypeServiceN[];
  setCurrentDetails: (value: TypeServiceN) => void;
  setDatailsService: (value: boolean) => void;
};

const servMonth = (services: TypeServiceN[]) => {
  const actual = moment().month();
  const serviceMonth = services.filter((serv) => moment(serv.data).month() === actual);
  return serviceMonth;
};

const amountComission = (services: TypeServiceN[]) => {
  const comissionTxs = services.map((serv) => serv.txServico);
  const products = services.map((serv) => serv.produto);
  const valueProds = products.map((prod) => amountBill(
    { listProducts: prod, serviceTax: 0 },
  ));
  const comissionProd = valueProds.reduce((acc, cur) => Number(acc) + Number(cur), 0);
  const amoutTxs = comissionTxs.reduce((acc, cur) => Number(acc) + Number(cur), 0);

  return Number(amoutTxs) + Number(comissionProd) * 0.1;
};

function InfoEmployee({ employee, services, setCurrentDetails,
  setDatailsService }: TypeParams) {
  const filterServices = servMonth(services);
  const comissionValue = amountComission(filterServices);
  const [showService, setShowService] = useState(false);
  const [showDetailsEmployee, setShowDetailsEmployee] = useState(false);

  const showDetails = (service: TypeServiceN) => {
    setDatailsService(true);
    setCurrentDetails(service);
  };

  const toggleService = () => {
    setShowService(!showService);
  };

  const toggleDetailsEmployee = () => {
    setShowDetailsEmployee(!showDetailsEmployee);
    setShowService(false);
  };

  const { nome, funcao, cpf } = employee;
  const contato = '81 99999-9999';
  const endereco = 'Rua do Endereço, 99';

  return (
    <div className="employInfo">
      <div className="resumeEmployee">
        <div>{nome}</div>
        <div>{funcao}</div>
        <div>{filterServices.length}</div>
        <button onClick={ toggleDetailsEmployee }>Detalhes</button>
      </div>

      {(showDetailsEmployee) ? (
        <div className="detailsEmployee">
          <div className="idDet">{`CPF/CNPJ: ${cpf}`}</div>
          <div className="contDet">{`Contato: ${contato}`}</div>
          <button className="btnRm"> Remover</button>
          <div className="adrDet">{`Endereço: ${endereco}`}</div>
          <div className="comDet">{`Comissão: R$ ${comissionValue}`}</div>
          <button className="btnDet" onClick={ toggleService }>Serviços</button>
        </div>) : null}

      {(showService) ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {filterServices.map((service) => (
              <tr key={ service.id }>
                <td>{service.nome}</td>
                <td>{service.data}</td>
                <td>{service.txServico}</td>
                <td>
                  <button onClick={ () => showDetails(service) }>Detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>) : null}

    </div>
  );
}

export default InfoEmployee;
