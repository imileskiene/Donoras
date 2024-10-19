import { Outlet } from "react-router-dom";
import Donoras from "../components/Donoras";

function Sarasas({ donors, fetchDonors }) {
  donors.sort((a, b) => a.lastName.localeCompare(b.lastName));
  return (
    <>
      <h1>Donorų sąrašas</h1>
      <div>
        {donors.map((donor) => (
          <Donoras key={donor.id} donor={donor} onDonorUpdate={fetchDonors} />
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default Sarasas;
