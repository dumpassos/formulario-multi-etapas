import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0px;
    cursor: pointer;

    a {
        display: flex;
        align-itemss: center;
        text-decoration: none;

    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 22px;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 20px;
    color: #fff;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 18px;
    color: #C0C0C0;

`;

export const IconArea = styled.div<{active: boolean}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25CD89' : '#C0C0C0'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;


export const Point = styled.div<{active: boolean}>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 3px solid #C0C0C0;
    background-color: ${props => props.active ? '#25CD89' : '#483D8B'};
    margin-left: 30px;
    margin-right: -6px;
    margin-top: 14px;
`;