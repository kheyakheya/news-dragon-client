import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Register = () => {
    const {createUser}= useContext(AuthContext);
    const [accepted,setAccepted]=useState(false);
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo= form.photo.value;
        const password=form.password.value;
        console.log(name,photo,email,password);
        createUser(email,password)
        .then(result=>{
            const createdUser= result.user;
            console.log(createdUser);

        })
        .catch(error=>{
            console.log(error)
        })
        

    }
    const handleAccepted=(event)=>{
        setAccepted(event.target.checked)
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photo" type="text" placeholder="Photo URL" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    type="checkbox" 
                    name="accept" 
                    label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br></br>
                <Form.Text className='text-secondary'>
                    Already Have an Account?  <Link to='/login'>Login</Link>
                </Form.Text>

                <Form.Text className="text-success">
                </Form.Text>
                <Form.Text className="text-danger">
                </Form.Text>
            </Form>


        </Container>

    );
};

export default Register;