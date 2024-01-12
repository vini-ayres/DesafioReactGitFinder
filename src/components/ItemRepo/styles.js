import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 75%;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #FAFAFA;
    padding: 30px;
    border-radius: 20px;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
        margin-bottom: 10px;
    }

    p {
        font-size: 12px;
        color: #FAFAFA60;
        margin-bottom: 16px;
    }

    a.remover {
        color: #FAFAFA;
        background-color: #FF000080;
        margin-top: 10px;
        cursor: pointer;
        border: 1px solid #FF000080;
        padding: 10px;
        border-radius: 20px;
    }

    a.remover:hover {
        background-color: #FF000060;
    }
    
    a {
        margin-right: 20px;
        color: #22272e;
        background-color: #FAFAFA80;
        border: 1px solid #FAFAFA80;
        padding: 10px;
        border-radius: 20px;
        text-decoration: none;
    }

    a:hover {
        background-color: #FAFAFA60;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
        margin-bottom: 30px;
    }
`