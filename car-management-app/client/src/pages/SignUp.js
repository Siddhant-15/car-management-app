import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/api';
import { SignUpWrapper, FormContainer, Title, Form, Input, Button, AltLink } from './SignUpStyles';

const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register({ username, email, password });
            alert("Registration successful! Please log in.");
            navigate('/login');
        } catch (err) {
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <SignUpWrapper>
            <FormContainer>
                <Title>Sign Up</Title>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit">Sign Up</Button>
                </Form>
                <AltLink>
                    Already have an account? <Link to="/login">Log in here</Link>
                </AltLink>
            </FormContainer>
        </SignUpWrapper>
    );
};

export default SignUp;
