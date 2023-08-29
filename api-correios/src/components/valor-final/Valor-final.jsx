import React from "react";
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const BackColor = styled.div`
    background-color: #FFCD40;
    width: 100%;
    height: 965px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Retangule = styled.div`
    width: 1235px;
    height:500px;
    background-color: #E1E1E1;
    border-radius: 20px;
    & h1,p{
        text-align: center;
    }
`

const StyledButton = styled(Button)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0 auto;
`;
const ValorFinal = ()=>{
    var correio = "Sedex" //Aqui sera o "carrier" do "shipment"
    var valor = 433.0; //Aqui sera o "price" do "shipment"
    return (
        <BackColor>
            <Retangule>
                <h1>Valor final do frente</h1>
                
                <p>O melhor para seu destino é {correio} com o valor de {valor} com prazo de entrega </p>
                <StyledButton variant="contained">Avançar</StyledButton>

            </Retangule>
        </BackColor>
    )
}

export default ValorFinal