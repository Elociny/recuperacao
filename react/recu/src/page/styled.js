import styled from "styled-components"; 

const Div = styled.div`
    .area {
        padding: 25px 25px;

        margin-left: 400px;
    }

    .titulo {
        font-size: 30px;

        font-weight: bolder;

        margin-bottom: 25px;
        margin-right: 317px;
    }

    .row {
        display: flex;
        flex-direction: row;

        font-size: 20px;
    }

    .row2 {
        display: flex;
        flex-direction: row;

        font-size: 20px;

        text-align: center;

        margin: 50px 0px;
    }

    .input input {
        margin: 0px 10px;

        outline: none;
      
        padding: 5px 5px;

        width: 300px;
    }
    
    .botao button {
        background-color: white;

        border-width: 1px;
        border-radius: 10px;

        cursor: pointer;

        padding: 10px 10px;
    }

    .botao button:hover {
        background-color: #d9d9d9;
    }

    .titulo2 {
        font-size: 30px;

        font-weight: bolder;

        margin-top: 50px;
    }

    .tabela {
        text-align: center;
    }
`;

export { Div };