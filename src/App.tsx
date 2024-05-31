import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AplicationProvider from './Context/AplicationProvider';
import MainScreen from './MainScreen';

function App() {
  return (
    <AplicationProvider>
      <BrowserRouter>
        <div className="principalScreen">
          <MainScreen />
        </div>
      </BrowserRouter>
    </AplicationProvider>
  );
}

export default App;
