import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { login as loginService } from '../services/api';
import { LoginWrapper, FormContainer, Title, Form, Input, Button, AltLink } from './LoginStyles';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginService(email, password);
            login(response.data.user, response.data.token);
            navigate('/cars');
        } catch (err) {
            alert("Login failed. Check your credentials and try again.");
        }
    };

    return (
        <LoginWrapper>
            <FormContainer>
                <Title>Login</Title>
                <Form onSubmit={handleSubmit}>
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
                    <Button type="submit">Log In</Button>
                </Form>
                <AltLink>
                    Don't have an account? <Link to="/signup">Sign up here</Link>
                </AltLink>
            </FormContainer>
        </LoginWrapper>
    );
};

export default Login;
