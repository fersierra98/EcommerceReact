import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
  <Navbar className="navbar">
    <Container>
      <Navbar.Brand as={Link} to={'/'}>
        <img src="https://megliosport.com.ar/wp-content/uploads/2017/07/SOCCER-Convertido-300x281.png" alt="logo" className='logo' />
      </Navbar.Brand>
      <Nav className="ms-auto navLinks">
        <Nav.Link className="navLinksItems" as={NavLink} to={'/'}>
          Inicio
        </Nav.Link>
        <Nav.Link
          className="navLinksItems"
          as={NavLink}
          to={'/category/Adidas'}
        >
          Adidas
        </Nav.Link>
        <Nav.Link
          className="navLinksItems"
          as={NavLink}
          to={'/category/Nike'}
        >
          Nike
        </Nav.Link>
        <Nav.Link
          className="navLinksItems"
          as={NavLink}
          to={'/category/Puma'}
        >
          Puma
        </Nav.Link>
        <Nav.Link className="navLinksItems" as={NavLink} to={'/cart'}>
          <CartWidget />
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
}