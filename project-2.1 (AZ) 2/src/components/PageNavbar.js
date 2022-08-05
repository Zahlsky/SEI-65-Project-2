// ! Import Link
import { Link } from 'react-router-dom'
import LogoImage from '../images/image.png'

// ! Import React-Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const PageNavbar = () => {

  return (
    <Navbar expand="sm" >
      <Container as="section" className="bg-dark">
        <Navbar.Brand as={Link} to="/"><img className='logo' src={LogoImage} alt="Spinner" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-around">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/coins">Coins</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}
export default PageNavbar