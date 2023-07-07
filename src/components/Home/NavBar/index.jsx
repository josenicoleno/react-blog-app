import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import {menu} from '../../../config/menu';

const NavBar = () => {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">{/* Los elementos que se ocultan */}
          <Nav className="me-auto">
            {menu.sort(menu.orden).map(item => {
              if (item.submenu) {
                return <NavDropdown title={item.description} id="basic-nav-dropdown" key={item.orden}>
                  {item.submenu?.sort(item.submenu.orden).map(subitem =>
                    <NavDropdown.Item href={subitem.to} key={subitem.orden}>{subitem.description}</NavDropdown.Item>
                  )}
                </NavDropdown>
              } else {
                return < Link className="nav-link" to={item.to} key={item.orden} >
                  {item.description}
                </Link>
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};
export default NavBar;
