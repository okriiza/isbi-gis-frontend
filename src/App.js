import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Unsur from './component/Unsur';
import Detail from './component/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unsur/:id_element/:id_area" element={<Unsur />} />
        <Route path="/detail/:id_element/:id_area/:id_type" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
