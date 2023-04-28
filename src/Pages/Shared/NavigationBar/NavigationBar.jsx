import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';


const NavigationBar = () => {
    const {user, logOut}=useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then()
        .catch(error=>{console.log(error)})
    }

    return (
        <div>
            <Container>
            <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/8'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            {user &&  <FaUserCircle style={{fontSize:'2rem'}} ></FaUserCircle>}
                           
                            {user ?  <Button onClick={handleLogout} variant="secondary">Logout</Button>: <Link to='/login'><Button variant="secondary">Login</Button></Link>}
                           
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;