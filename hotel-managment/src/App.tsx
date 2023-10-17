import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedMain from './routes/ProtectedRoute';

//import layout
import NotFound from './components/NotFound';
import Manager from './manager';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedMain />}>
          <Route path="main" element={<></>} />
        </Route>
        
        <Route path="login" element={<></>} />
        <Route path="admin/*" element={<Manager />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
