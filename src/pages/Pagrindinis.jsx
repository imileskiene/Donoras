import { Link } from "react-router-dom";
import "./Pagrindinis.css";

function Pagrindinis() {
  return (
    <>
      <div className="main-container">
        <h1>Kodėl verta tapti kraujo donoru?</h1>
        <img src="./public/donoras.png" alt="donoras" className="donor-image" />
        <div className="text-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            tempora reiciendis odio repellat dicta odit provident eos aperiam!
            Dicta voluptatum voluptas maiores voluptates ex fugiat delectus
            fugit beatae ut non! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Minus ducimus fuga quas. Nisi aliquam blanditiis a
            cum quam dolores ipsa id soluta repellendus recusandae, hic illo
            libero mollitia minima laboriosam?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            rem repudiandae minima! Dolor dicta culpa, cupiditate error ipsum
            quidem atque libero pariatur? Fugiat nobis distinctio recusandae
            eligendi magni deserunt quos.
          </p>
        </div>
        <Link to={`/donoro-registracija`}>
          <button className="register-button">Registracija</button>
        </Link>
      </div>
    </>
  );
}

export default Pagrindinis;
