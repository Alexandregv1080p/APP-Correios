import React, { useState } from "react";
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDataContext } from "../provedor-dados/DataProvider";
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
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    position: relative;
    margin: 50px;
    margin-bottom: 20px;
`
const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
`
//aqui é o sender
const DadosUsuario = () => {
    const { senderData, setSenderData } = useDataContext();
    const navigate = useNavigate();
    const handleAddressChange = event => {
        const { name, value } = event.target;
        setSenderData(prevData => ({
            ...prevData,
            address: {
                ...prevData.address,
                [name]: value
            }
        }));
    };
    const handleAvancarClick = () => {
        navigate('/destino');
        console.log(senderData)
    };
    return (
        <BackColor>
            <Retangule>
                <h1>Dados de origem</h1>
                <FormField>
                    <TextField
                        required
                        id="outlined-required"
                        label="Nome completo"
                        value={senderData.fullname}
                        onChange={event => setSenderData(prevData => ({ ...prevData, fullname: event.target.value }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="CPF"
                        value={senderData.cpf}
                        onChange={event => setSenderData(prevData => ({ ...prevData, cpf: event.target.value }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Telefone"
                        value={senderData.phone}
                        onChange={event => setSenderData(prevData => ({ ...prevData, phone: event.target.value }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        value={senderData.email}
                        onChange={event => setSenderData(prevData => ({ ...prevData, email: event.target.value }))}

                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="CEP"
                        name="cep"
                        value={senderData.address.cep}
                        onChange={handleAddressChange}
                        disabled={false}
                    />
                </FormField>
                <FormField>
                    <TextField
                        required
                        id="outlined-required"
                        label="Estado"
                        name="state"
                        value={senderData.address.state}
                        onChange={handleAddressChange}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="UF"
                        name="uf"
                        value={senderData.address.uf}
                        onChange={handleAddressChange}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Cidade"
                        name="city"
                        value={senderData.address.city}
                        onChange={handleAddressChange}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Bairro"
                        name="neighborhood"
                        value={senderData.address.neighborhood}
                        onChange={handleAddressChange}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Rua"
                        name="street"
                        value={senderData.address.street}
                        onChange={handleAddressChange}
                    />
                    <TextField
                        sx={{
                            marginTop:2
                        }}
                        required
                        id="outlined-required"
                        label="Número"
                        name="number"
                        value={senderData.address.number}
                        onChange={handleAddressChange}
                    />
                    <TextField
                        sx={{
                            marginTop:2
                        }}
                        id="outlined-required"
                        label="Complemento"
                        name="complement"
                        value={senderData.address.complement}
                        onChange={handleAddressChange}
                    />
                </FormField>
                <ContainerBtn>
                    <Button onClick={handleAvancarClick} variant="contained"
                        sx={{
                            width: 300
                        }}
                    >Avançar</Button>
                </ContainerBtn>

            </Retangule>
        </BackColor>
    )
}

export default DadosUsuario