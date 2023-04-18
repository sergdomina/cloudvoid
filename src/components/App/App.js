import { Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
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
import Contact from 'pages/Contact/Contact';
import {Context} from "./context";
import Clients from 'pages/Clients/Clients';

function App() {
  const [isOnSlider, setOnSlider] = useState(false)

  return (
    <>
      <Context.Provider value={{isOnSlider, setOnSlider}}>
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
            <Route path="clients" element={<Clients />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<h1>NotFound</h1>} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
