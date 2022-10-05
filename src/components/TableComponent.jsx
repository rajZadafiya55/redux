import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteStudentData, getStudentData } from '../Store/StoreActions/StoreAction';

const TableComponent = () => {
    const navigate = useNavigate()
    const onBack = () => {
        navigate('/')
    }
    const [allPerson, setallPerson] = useState([])
    const [BackButton, setBackButton] = useState("");
    const dispatch = useDispatch()
    const { student } = useSelector(state => state)
    
    useEffect(() => {
        dispatch(getStudentData())
    },[])
    useEffect(() => {
        setallPerson(student)
    }, [student])

    useEffect(() => {
        setBackButton(window.location.pathname);
    }, []);

    const onDelete = (id) => {
        if(window.confirm("Are You Sure Delete?")){
            dispatch(deleteStudentData(id))
        }
    }
    const onUpdate =(id) => {
        navigate(`/form/${id}`)
    }
    return (
        <>
            <Container>
                {BackButton === "/table" && (
                    <Row>
                        <Col>
                            <div className="py-4">
                                <Button variant='dark' outline onClick={onBack}>
                                    Back
                                </Button>
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>age</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPerson?.map((x, index) => {
                            return (
                                <tr key={index}>
                                    <td>{x._id}</td>
                                    <td>{x.firstName}</td>
                                    <td>{x.lastName}</td>
                                    <td>{x.age}</td>
                                    <td>{x.city}</td>
                                    <td>{x.gender}</td>
                                    <td>
                                        <Button variant='info' className='me-3' onClick={() => onDelete(x._id)}>Delete</Button>
                                        <Button variant='success' onClick={() => onUpdate(x._id)}>Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
export default TableComponent