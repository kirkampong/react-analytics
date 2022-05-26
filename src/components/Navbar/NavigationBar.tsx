import {
  Navbar,
  Nav,
} from "react-bootstrap";
export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand href="#home">Tenet Analytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {<Nav.Link href="/about">About</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}