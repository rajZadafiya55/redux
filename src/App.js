import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FormComponent from './components/FormComponent';
import HeaderComponent from './components/HeaderComponent';
import TableComponent from './components/TableComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeaderComponent />} />
          <Route path='/table' element={<TableComponent />} />
          <Route path='/form' element={<FormComponent />} />
          <Route path='/form/:id' element={<FormComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
