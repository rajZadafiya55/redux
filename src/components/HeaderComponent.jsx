import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import TableComponent from './TableComponent';

const HeaderComponent = () => {
    const navigate = useNavigate()
    const onTable = () => {
        navigate('/table')
    }
    const onForm = () => {
        navigate('/form')
    }
    return (
        <>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='py-3'>MainHeader</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="" onClick={onTable}>TABLE</Nav.Link>
                            <Button variant="danger" onClick={onForm}>ADD+</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* table  */}
            <TableComponent />
        </>
    )
}

export default HeaderComponent