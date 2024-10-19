import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Registracija from "../pages/Registracija";
import "./Informacija.css";

function Informacija() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [donor, setDonor] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchDonors = async () => {
      const { data } = await axios.get(`http://localhost:3000/donoras/${id}`);
      setDonor(data);
    };
    fetchDonors();
  }, [id]);

  const handleDelete = async () => {
    const confirmed = window.confirm(`Ar tikrai norite ištrinti?`);
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:3000/donoras/${id}`);
        navigate.push("/donoro-sarasas");
      } catch (error) {
        console.error("Donoro ištrinti negalima:", error);
      }
    }
  };

  if (!donor) return <p>Loading...</p>;

  return (
    <div className="donor-card">
      <h1>Informacija apie donorą: {id}</h1>
      {!isEditing ? (
        <>
          <h2> {donor.firstName}</h2>
          <h2> {donor.lastName}</h2>
          <p> {donor.age}</p>
          <p> {donor.gender}</p>
          <p> {donor.bloodGroup}</p>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Redaguoti
          </button>
          <Link to={`/donoro-sarasas/${id}`}>
            <button className="delete-button" onClick={handleDelete}>
              Ištrinti
            </button>
          </Link>
        </>
      ) : (
        <Registracija donor={donor} setIsEditing={setIsEditing} />
      )}
    </div>
  );
}

export default Informacija;
