import styled from "styled-components";

export const Container = styled.div<{selected: boolean}>`
    display: flex;
    border: 3px solid ${e => e.selected ? '#25CD89' : '#FFF'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 3px solid #C0C0C0;
    }
`;

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    font-size: 35px;
    border-radius: 50%;
    background-color: #DCDCDC;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 25px;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px
`;

export const Description = styled.div`
    font-size: 18px;
    color: #DCDCDC;
`;