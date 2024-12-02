// Importing Bootsrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import '../styles/colorTheme.css';

// building a navigation Bar Via Bootstrap
const NavBar = () => {
  return (
        <Navbar className="greyLevel3">
                <Container className="justify-content-center">
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Link href="/home">All Recipes</Nav.Link>
                        <Nav.Link eventKey="link-1">Favorites</Nav.Link>
                        <Nav.Link eventKey="link-2">Appetizers</Nav.Link>
                        <Nav.Link eventKey="link-3">Salads</Nav.Link>
                        <Nav.Link eventKey="link-4">Soups</Nav.Link>
                        <Nav.Link eventKey="link-5">Desserts</Nav.Link>
                        <Nav.Link eventKey="link-6">Main Dishes</Nav.Link>
                    </Nav>
                </Container>
        </Navbar>
  );
};

// exporting module to be used in app.js
export default NavBar;
