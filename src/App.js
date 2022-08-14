import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import './styles/bootstrap.min.css'

function App() {
  return (
   <> 
      <Header/>
<div className='container mt-3'>
<Routes>
  <Route exact path='/' element={  <Login/> }  />
  <Route path='/listado' element={  <Listado/> }  />
</Routes> 
</div>



   </>
  );
}

export default App;
