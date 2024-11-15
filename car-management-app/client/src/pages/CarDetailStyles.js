import styled from 'styled-components';

export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.body};
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: background-color 0.3s, transform 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.primary};
        transform: scale(1.05);
    }
    svg {
        margin-right: 0.5rem;
    }
`;

export const CarInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.secondaryBackground};
    border-radius: 15px;
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.15);
    padding: 2rem;
    max-width: 800px;
    width: 100%;
    text-align: center;

    h2 {
        font-size: 2rem;
        color: ${({ theme }) => theme.text};
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.textSecondary};
        margin-bottom: 1.5rem;
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        margin-bottom: 1.5rem;
    }
`;

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b22222;
    color: ${({ theme }) => theme.body};
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    &:hover {
        background-color: #8b0000;
        transform: scale(1.05);
    }
    svg {
        margin-right: 0.5rem;
    }
`;
