import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Login = () => {
    const {signIn}=useContext(AuthContext)
    const navigate= useNavigate();
    const location= useLocation();
    console.log("login location", location)

    const from= location.state?.from?.pathname || "/category/8";
    const handleLogin=(e)=>{
        e.preventDefault();
        const form= e.target;
        const email=form.email.value;
        const password= form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const loggedUser= result.user;
            console.log(loggedUser);
            navigate(from, {replace:true});
        })
        .catch(error=>{
            console.log(error)
        })



    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email"  required/>
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br></br>
                <Form.Text className='text-secondary'>
                  Don't Have an Account?  <Link to='/register'>Register</Link>
                </Form.Text>

                <Form.Text className="text-success">
                </Form.Text>
                <Form.Text className="text-danger">
                </Form.Text>
            </Form>


        </Container>
    );
};

export default Login;