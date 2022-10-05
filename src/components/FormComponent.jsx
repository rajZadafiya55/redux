import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,     
    Input,
    Label,
    Row,
} from "reactstrap";
import { addStudentData, getStudentDataId, updateStudentData } from "../Store/StoreActions/StoreAction";


const FormComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { allPerson } = useSelector(state => state)

    const onCancel = () => {
        navigate("/");
    };

    const [singlePerson, setSingleperson] = useState({
        firstName: "",  
        lastName: "",
        age: "",
        city: "",
        gender: "",
    });

    const resetForm = () => {
        setSingleperson({
            firstName: "",
            lastName: "",
            age: "",
            city: "",
            gender: ""
        })
    }
    const onInput = (e) => {
        setSingleperson({ ...singlePerson, [e.target.name]: e.target.value });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (id !== undefined){
            dispatch(updateStudentData(singlePerson, navigate));
            resetForm()
            id = undefined
        }
        else {
            dispatch(addStudentData(singlePerson, navigate))
        }
        resetForm()
        // console.log(resetForm());
    }
    useEffect(() => {
        // if(id !== undefined){
        dispatch(getStudentDataId(id))
        // }
    }, [dispatch, id])
    useEffect(() => {
        if (allPerson && id) {
            setSingleperson({ ...allPerson, id: allPerson._id })
        }
    }, [allPerson])
    return (
        <>
            <Container>
                <Form onSubmit={onFormSubmit} className="mt-5 bg-info p-5 text-start">
                    <Row>
                        <Col lg="6">
                            <FormGroup>
                                <Label for="firstName">
                                    First Name
                                </Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter Your FirstName"
                                    type="text"
                                    onChange={onInput}
                                    value={singlePerson.firstName}
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                <Label for="lastName">
                                    Last Name:
                                </Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter Your LastName"
                                    type="text"
                                    onChange={onInput}
                                    value={singlePerson.lastName}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <FormGroup>
                                <Label for="age">
                                    Age
                                </Label>
                                <Input
                                    id="age"
                                    name="age"
                                    type="number"
                                    onChange={onInput}
                                    value={singlePerson.age}
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                            <FormGroup>
                                <Label for="exampleSelect"></Label>
                                <Input type="select" name="city" id="exampleSelect" value={singlePerson.city}
                                    onChange={onInput}>
                                    <option selected disabled>City</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Panjab">Panjab</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <FormGroup check className="p-0">
                                <div className="d-flex gap-5">
                                    <Label >Gender</Label>
                                    <Label check>
                                        <Input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            onChange={onInput}
                                            checked={singlePerson.gender !== '' && singlePerson.gender === "Male" ? true : false}
                                        />{" "}
                                        Male
                                    </Label>
                                    <Label check>
                                        <Input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            onChange={onInput}
                                            checked={singlePerson.gender !== '' && singlePerson.gender === "Female" ? true : false}
                                        />{" "}
                                        Female
                                    </Label>
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6" className="d-flex gap-3">
                            <Button color="danger">Submit</Button>{' '}
                            <Button color="dark" onClick={onCancel}>Close
                            </Button>{' '}
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
};

export default FormComponent;
