// Importing Bootsrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import '../styles/colorTheme.css';
import { NavLink } from 'react-router-dom';

// building a navigation Bar Via Bootstrap
const NavBar = () => {
  return (
        <Navbar className="greyLevel3">
                <Container className="justify-content-center">
                    <Nav variant="tabs" defaultActiveKey={"/home"}>
                        <Nav.Link to="/home" as={NavLink} eventKey="link-1">Home</Nav.Link>
                        <Nav.Link eventKey="link-9">Create Recipe</Nav.Link>
                        <Nav.Link to="/AllRecipes" as={NavLink} eventKey="link-2">AllRecipes</Nav.Link>
                        <Nav.Link eventKey="link-3">Favorites</Nav.Link>
                        <Nav.Link eventKey="link-4">Appetizers</Nav.Link>
                        <Nav.Link eventKey="link-5">Salads</Nav.Link>
                        <Nav.Link eventKey="link-6">Soups</Nav.Link>
                        <Nav.Link eventKey="link-7">Desserts</Nav.Link>
                        <Nav.Link eventKey="link-8">Main Dishes</Nav.Link>
                    </Nav>
                </Container>
        </Navbar>
  );
};

// exporting module to be used in app.js
export default NavBar;
