import React from "react";
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

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
    & h1{
        text-align: center;
    }
`
const FormField = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    margin: 50px;
`
const StyledButton = styled(Button)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0 auto;
`;
//aqui é o 
const DadosDestino = ()=>{
    const navigate = useNavigate();
    const handleAvancarClick = () => {
        navigate('/');
      }
    return (
        <BackColor>
            <Retangule>
                <h1>Dados de destino</h1>
                <FormField>
                    <TextField
                        required
                        id="outlined-required"
                        label="Nome completo"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="CPF"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Telefone"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                    
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="CEP"
                     />
                </FormField>
                <FormField>
                    <TextField
                        required
                        id="outlined-required"
                        label="Estado"
                     />
                    <TextField
                        required
                        id="outlined-required"
                        label="Cidade"
                     />
                    <TextField
                        required
                        id="outlined-required"
                        label="Bairro"
                     />
                    <TextField
                        required
                        id="outlined-required"
                        label="Rua"
                     />
                    <TextField
                        required
                        id="outlined-required"
                        label="Número"
                     />
                    <TextField
                        required
                        id="outlined-required"
                        label="Complemento"
                     />
                </FormField>
                <StyledButton variant="contained">Avançar</StyledButton>
                <StyledButton onClick={handleAvancarClick} variant="contained">Voltar</StyledButton>
            </Retangule>
        </BackColor>
    )
}

export default DadosDestino