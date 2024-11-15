import styled from 'styled-components';

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 2rem;
    position: relative;
    gap: 1.5rem;
`;

export const TopButtons = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const SmallButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    width: 40px;
    height: 40px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    &:hover {
        background-color: ${({ theme }) => theme.secondary};
        transform: scale(1.05);
    }
`;

export const DeleteButton = styled(SmallButton)`
    background-color: #b22222;
    &:hover {
        background-color: #8b0000;
    }
`;

export const LogoutButton = styled.button`
    position: absolute;
    left: 0;
    top: 0;
    margin: 1rem;
    padding: 0.5rem;
    background-color: #b22222;
    color: ${({ theme }) => theme.body};
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #8b0000;
    }
`;

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    gap: 1rem;
    .search-bar {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid ${({ theme }) => theme.primary};
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: border 0.3s ease;
        &:focus {
            border-color: ${({ theme }) => theme.secondary};
        }
    }
    .search-icon {
        color: ${({ theme }) => theme.text};
    }
`;

export const TransparentBox = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 2rem;
    background: ${({ theme }) => theme.secondaryBackground};
    border-radius: 15px;
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const CarGrid = styled.div`
    display: ${({ isListView }) => (isListView ? 'block' : 'grid')};
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
`;

export const CarItem = styled.div`
    display: flex;
    flex-direction: ${({ isListView }) => (isListView ? 'row' : 'column')};
    align-items: ${({ isListView }) => (isListView ? 'center' : 'flex-start')};
    gap: 1rem;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.body};
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s, transform 0.3s;
    margin-bottom: ${({ isListView }) => (isListView ? '1.5rem' : '0')};
    cursor: pointer;
    &:hover {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        transform: translateY(-5px);
    }
    position: relative;
    img {
        width: ${({ isListView }) => (isListView ? '150px' : '100%')};
        height: auto;
        border-radius: 8px;
        object-fit: cover;
    }
    .car-details {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        h3 {
            margin: 0;
            color: ${({ theme }) => theme.text};
        }
        p {
            margin: 0;
            color: ${({ theme }) => theme.textSecondary};
        }
        .tags {
            color: ${({ theme }) => theme.primary};
            font-size: 0.9rem;
        }
    }
`;

export const ActionButtons = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: ${({ isListView }) => (isListView ? '0' : '1rem')};
    justify-content: flex-end;
    width: 100%;
`;
