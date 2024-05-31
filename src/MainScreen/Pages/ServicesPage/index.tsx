import { useContext, useEffect, useState } from 'react';
import SearchBar from '../../SearchBar';
import NewService from './NewService';
import TableServices from './TableServices';
import AplicationContext from '../../../Context/AplicationContext';
import { FilterTable } from '../../../utils/Functions/FilterTable';
import { TypeServiceN } from '../../../utils/Types';
import './servicesPage.css';
import DetailsService from './DetailsService';

function ServicesPage() {
  const { servicesDB, handleData } = useContext(AplicationContext);
  const [updateServices, setUpdateServices] = useState(false);
  const [datailsService, setDatailsService] = useState(false);
  const [currentDetails, setCurrentDetails] = useState({} as TypeServiceN);
  const [services, setServices] = useState(servicesDB);

  useEffect(() => {
    setServices(servicesDB);
  }, [servicesDB]);

  const handleFilter = (e: any) => {
    const filter = { text: e.text, selector: e.filter, table: 'service' };
    const newList: TypeServiceN[] = FilterTable({ data: servicesDB, filterInfo: filter });
    setServices(newList);
  };

  const createService = () => {
    setUpdateServices(true);
  };

  const cancelService = () => {
    setUpdateServices(false);
  };

  const handleServices = (service: any, action: string) => {
    if (action === 'remove') handleData(service, 'remove', 'services');
  };

  const showDetails = (service: TypeServiceN) => {
    setCurrentDetails(service);
    setDatailsService(true);
  };

  const handleDatailsService = (value: boolean) => {
    setDatailsService(value);
  };

  return (
    <div>
      <SearchBar
        filter1="Nome"
        filter2="Veiculo"
        filter3="Funcionario"
        handleFilter={ handleFilter }
        updateList={ createService }
      />
      <div className="serviceContent">
        {(updateServices) ? <NewService cancelUpdate={ cancelService } /> : null}
        <TableServices
          services={ services }
          handleServices={ handleServices }
          showDetails={ showDetails }
        />
        {(datailsService) ? <DetailsService
          service={ currentDetails }
          setDatailsService={ handleDatailsService }
        /> : null}
      </div>
    </div>

  );
}

export default ServicesPage;
