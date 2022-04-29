import styled from 'styled-components';

export const Container = styled.div`
    width: 240px;
    height: 60px;
    background: ${props => props.actived ? '#EE6B26' : '#20295F'};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    img {
        width: 25px;
        height: 25px;
    }
    span {
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover {
        background: #EE6B26;

    }
`;