import { Route, Routes } from 'react-router-dom';
import './App.css';

//import layout
import Manager from './manager';
import Web from './web';
import Form from './components/FormLogin';
import NotFound from './components/NotFound';

//
import { AuthContext } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContext>
        <Routes>
          <Route path="admin/*" element={<Manager />} />
          <Route path="/login" element={<Form />} />
          <Route path="/*" element={<Web />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </AuthContext>
    </div>
  );
}

export default App;
