import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./NavPage.css";

function NavPage() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Nav className="nav" style={{ maxHeight: "100px" }}>
          <NavLink className="navlink" to="/">
            Pagrindinis
          </NavLink>
          <NavLink className="navlink" to="/donoro-registracija">
            Donoro registracija
          </NavLink>
          <NavLink className="navlink" to="/donoro-sarasas">
            Donorų sąrašas
          </NavLink>
          {/* <NavLink className="navlink" to= "/donoro-informacija/:id">Donoro duomenys</NavLink> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavPage;
