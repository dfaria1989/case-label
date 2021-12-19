import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { logout } from "../services/auth.service";

interface Props {
    data: object | null

}

const Header: React.FC<Props> = () => {
    const { state = null}: any = useLocation();
    return (
        <Navbar>
            <Container>
                <Navbar.Collapse className="justify-content-end">
                  Loged in as a: {state?.name}
                    <Navbar.Text>
                        <Link to="/login" className="nav-link" onClick={async () => logout()}>Log Out</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header
