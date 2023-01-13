import { Routes, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import About from '../../pages/About';
// import Products from '../../pages/Products';
import Home from '../../pages/Home/Home';
import Evolve from '../../pages/Cloud-evolve/Evolve';
import Help from '../../pages/Help';
import Migration from 'pages/Cloud-migration/Migration';
// import Privacy from '../../pages/Privacy';
// import Terms from '../../pages/Terms';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="cloud-evolve" element={<Evolve />} />
        <Route path="cloud-migration" element={<Migration />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Help />} />
      </Route>
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
}

export default App;
