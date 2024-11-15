import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-size: 16px;
        @media (max-width: 768px) {
            font-size: 14px;
        }
        @media (max-width: 480px) {
            font-size: 12px;
        }
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.3s ease;
    }

    button {
        font-size: 1rem;
        @media (max-width: 768px) {
            font-size: 0.9rem;
        }
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.primary};
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: ${({ theme }) => theme.hover};
    }
`;

export default GlobalStyles;
