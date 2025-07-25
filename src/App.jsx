import NavPage from "./components/NavPage";
import { Routes, Route } from "react-router-dom";
import Pagrindinis from "./pages/Pagrindinis";
import Registracija from "./pages/Registracija.jsx";
import Sarasas from "./pages/Sarasas.jsx";
import Informacija from "./components/Informacija.jsx";
import { useEffect, useState } from "react";
// import axios from "axios";
import PageNotFound from "./pages/PageNotFound";

import donorData from "./json_server/data.json";

function App() {
  const [donors, setDonors] =useState([]);

  const fetchDonors = () => {
    setDonors(donorData.donoras);
  };

    useEffect(() => {
      fetchDonors();
    }, []); 
  
  

  return (
    <>
      <NavPage />
      <Routes>
        <Route index element={<Pagrindinis />} />
        <Route path="donoro-registracija" element={<Registracija fetchDonors={fetchDonors}/>}
        />
        <Route path = "donoro-sarasas" element={<Sarasas donors={donors} fetchDonors={fetchDonors} />} />
        <Route  />
        <Route path="donoro-informacija/:id" element={<Informacija />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
