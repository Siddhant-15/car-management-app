import styled from 'styled-components';

export const SignUpWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 400px;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
`;

export const Title = styled.h2`
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
    font-size: 1.8rem;
    font-weight: 600;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 300px;
    margin: 0.5rem 0;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 5px;
    outline: none;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: 0.3s;

    &:focus {
        border-color: ${({ theme }) => theme.secondary};
        background: ${({ theme }) => theme.secondaryBackground};
    }
`;

export const Button = styled.button`
    width: 100%;
    max-width: 300px;
    margin: 1rem 0;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.secondary};
        transform: translateY(-2px);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: none;
    }
`;

export const AltLink = styled.div`
    margin-top: 1rem;
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;

    a {
        color: ${({ theme }) => theme.primary};
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;

        &:hover {
            color: ${({ theme }) => theme.secondary};
            text-decoration: underline;
        }
    }
`;
