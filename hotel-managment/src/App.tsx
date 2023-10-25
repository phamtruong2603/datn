import { Route, Routes } from 'react-router-dom';
import './App.css';

//import layout
import Manager from './manager';
import Web from './web';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="admin/*" element={<Manager />} />
        <Route path="/*" element={<Web />} />
      </Routes>
    </div>
  );
}

export default App;
