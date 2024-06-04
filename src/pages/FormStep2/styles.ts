import styled from "styled-components";

export const Container = styled.div`

    p {
        font-size: 19px;
        color: #B8B8D4;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 35px;
        font-weight: bold;
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #C0C0C0;
        margin: 30px 0px;
    }

    label {
        font-size: 19px;

        input {
            display: block;
            width: 100%;
            margin-top: 7px;
            box-sizing: border-box;
            outline: 0;
            padding: 20px 10px;
            border: 3px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            font-size: 19px;
            background-color: transparent;
        }
    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 19px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 35px;
        margin-right: 20px;
        margin-bottom: 10px;
    }
`;