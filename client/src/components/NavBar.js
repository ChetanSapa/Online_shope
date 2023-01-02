import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="light">
            <Container>
                <NavLink style={{color: 'white', marginLeft: '10px', textDecoration: 'none', fontSize: '24px'}}
                         to={SHOP_ROUTE}>Device shop</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: 'white', textDecoration: 'none'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Admin panel</Button>
                        <Button variant={"outline-light"} className='mx-sm-2' onClick={() => logOut()}>Logout</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;