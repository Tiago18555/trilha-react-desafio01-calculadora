import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E0E0E0;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #F5F5F5;
    width: 50%;
    border-radius: 10px;
    border: 2px solid #B0B0B0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
