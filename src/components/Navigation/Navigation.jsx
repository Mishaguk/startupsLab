import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="startups">Startups</Nav.Link>
          <Nav.Link as={Link} to="form">Form</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;