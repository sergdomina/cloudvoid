import { Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
import Layout from '../../components/Layout';
// import Products from '../../pages/Products';
import Home from '../../pages/Home/Home';
import Evolve from '../../pages/Cloud-evolve/Evolve';
import Governance from '../../pages/Cloude-governance/Governance';
import Smart from '../../pages/Smart_Infrastructure';
import Dev from '../../pages/Smart_DevOps';
import Solution from '../../pages/Solutions_Architecture';
import AI from '../../pages/AI&Analytics';
import MSP from '../../pages/MSP';
import About from '../../pages/About/About';
import Migration from 'pages/Cloud-migration/Migration';
import Loader from '../Loader/Loader'
// import Privacy from '../../pages/Privacy';
// import Terms from '../../pages/Terms';


function App() {

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementsByName(Loader);
  if(spinner) {
    setTimeout(()=>{
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="cloud-evolve" element={<Evolve />} />
        <Route path="smart-devops" element={<Dev />} />
        <Route path="cloud-governance" element={<Governance />} />
        <Route path="cloud-migration" element={<Migration />} />
        <Route path="smart-infractructure" element={<Smart />} />
        <Route path="cloud-solutions-architecture" element={<Solution />} />
        <Route path="cloud-ai-and-analytics" element={<AI />} />
        <Route path="master-msp" element={<MSP />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
}

export default App;
