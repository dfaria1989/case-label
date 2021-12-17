import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login/Login';
import { logout } from "../services/auth.service";

interface Props {
    data: object | null

}

const Header: React.FC<Props> = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Collapse className="justify-content-end">
                    <Link to={"/profile"} className="nav-link">Loged in as a: doctor</Link>
                    <Navbar.Text>
                        <Link to="/login" className="nav-link" onClick={async () => logout()}>Log Out</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header
