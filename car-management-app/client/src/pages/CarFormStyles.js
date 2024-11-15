// CarFormStyles.js
import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
`;

export const FormContainer = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(20, 20, 20, 0.9)' : 'rgba(255, 255, 255, 0.95)')};
    border-radius: 12px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const BackButton = styled.button`
    position: absolute;
    top: 1rem;
    left: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.primary};
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.secondary};
    }

    svg {
        font-size: 1.2rem;
    }
`;

export const Title = styled.h2`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1.5rem;
    text-align: center;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    background: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.text};
    transition: border-color 0.3s, background-color 0.3s;

    &:focus {
        border-color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => theme.secondaryBackground};
    }

    &::placeholder {
        color: ${({ theme }) => theme.textMuted};
    }
`;

export const TextArea = styled.textarea`
    ${Input}
    resize: vertical;
`;

export const FileInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FileLabel = styled.label`
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    white-space: nowrap;

    &:hover {
        background-color: ${({ theme }) => theme.secondary};
        transform: scale(1.05);
    }

    &:active {
        transform: scale(1);
    }
`;

export const HiddenFileInput = styled.input`
    display: none;
`;

export const Button = styled.button`
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.secondary};
        transform: scale(1.05);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: scale(1);
    }
`;
