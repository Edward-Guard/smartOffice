import { useContext, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import InfoEmployee from './InfoEmployee';
import AplicationContext from '../../../Context/AplicationContext';
import { FilterByEmployee } from '../../../utils/Functions/FilterByEmployee';
import DetailsService from '../ServicesPage/DetailsService';
import { TypeServiceN } from '../../../utils/Types';
import './employee.css';

function EmployeesPage() {
  const { employeesDB, servicesDB } = useContext(AplicationContext);
  const [datailsService, setDatailsService] = useState(false);
  const [currentDetails, setCurrentDetails] = useState({} as TypeServiceN);

  const handleLocation = (path: string) => {
    window.location.href = path;
  };

  useHotkeys('alt+1', () => { handleLocation('/stock'); });
  useHotkeys('alt+2', () => { handleLocation('/services'); });
  useHotkeys('alt+3', () => { handleLocation('/employees'); });

  const FilterList = (employee: string) => {
    const newList = FilterByEmployee(servicesDB, employee);
    return newList;
  };

  return (
    <div>
      Rendered EmployeesPage
      <div className="resumeEmployee">
        <div>Nome</div>
        <div>Função</div>
        <div>Serviços no mês</div>
      </div>
      {employeesDB.map((employee) => (
        <InfoEmployee
          key={ employee.id }
          employee={ employee }
          setDatailsService={ setDatailsService }
          setCurrentDetails={ setCurrentDetails }
          services={ FilterList(employee.nome) }
        />
      ))}

      {(datailsService) && <DetailsService
        service={ currentDetails }
        setDatailsService={ setDatailsService }
      />}

    </div>
  );
}

export default EmployeesPage;
