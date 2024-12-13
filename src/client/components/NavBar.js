// Importing Bootsrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import '../styles/colorTheme.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// building a navigation Bar Via Bootstrap
const NavBar = () => {
  const location = useLocation();

  return (
        <Navbar className="greyLevel3">
                <Container className="justify-content-center">
                    <Nav variant="tabs" key={location.pathname}>
                        <Nav.Link to="/home" as={NavLink} eventKey="link-1">Home</Nav.Link>
                        <Nav.Link to='/CreateRecipe' as={NavLink} eventKey="link-11">Create Recipe</Nav.Link>
                        <Nav.Link to="/Recipes/All" as={NavLink} eventKey="link-2">All Recipes</Nav.Link>
                        <Nav.Link to="/Recipes/Appetizers" as={NavLink} eventKey="link-4">Appetizers</Nav.Link>
                        <Nav.Link to="/Recipes/Salads" as={NavLink} eventKey="link-5">Salads</Nav.Link>
                        <Nav.Link to="/Recipes/Soups" as={NavLink} eventKey="link-6">Soups</Nav.Link>
                        <Nav.Link to="/Recipes/Desserts" as={NavLink} eventKey="link-7">Desserts</Nav.Link>
                        <Nav.Link to="/Recipes/Mains" as={NavLink} eventKey="link-8">Main Dishes</Nav.Link>
                    </Nav>
                </Container>
        </Navbar>
  );
};

// exporting module to be used in app.js
export default NavBar;
