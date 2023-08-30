import React, { useState } from "react";
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDataContext } from "../provedor-dados/DataProvider";
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import axios from 'axios';

const BackColor = styled.div`
    background-color: #FFCD40;
    width: 100%;
    height: 965px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Retangule = styled.div`
    width: 1235px;
    height:500px;
    background-color: #E1E1E1;
    border-radius: 20px;
    & h1{
        text-align: center;
        margin-top: 20px;
    }
`
const Retangule2 = styled.div`
    width: 835px;
    height:120px;
    margin-bottom: 20px;
    background-color: #E1E1E1;
    border-radius: 20px;
    & h1,p{
        text-align: center;
        margin-top: 10px;
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
const DadosUsuario = () => {
    const { senderData, setSenderData } = useDataContext();

    const navigate = useNavigate();

    const handleCpfChange = event => {
        const rawCpf = event.target.value.replace(/\D/g, ''); 
        const formattedCpf = rawCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); 
        setSenderData(prevData => ({ ...prevData, cpf: formattedCpf }));
    };

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
    const handleCepChange = async event => {
        const rawCep = event.target.value.replace(/\D/g, '');
        const formattedCep = rawCep.replace(/(\d{5})(\d{3})/, "$1-$2");
        setSenderData(prevData => ({
            ...prevData,
            address: {
                ...prevData.address,
                cep: formattedCep,
            },
        }));
        if (rawCep.length === 8) {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${rawCep}/json/`);
                const addressData = response.data;

                if (!addressData.erro) {
                    setSenderData(prevData => ({
                        ...prevData,
                        address: {
                            ...prevData.address,
                            uf: addressData.uf,
                            city: addressData.localidade,
                            neighborhood: addressData.bairro,
                            street: addressData.logradouro,
                        },
                    }));
                }
            } catch (error) {
                console.error("Error fetching address data:", error);
            }
        }
    };
    const handlePhoneChange = event => {
        const rawPhone = event.target.value.replace(/\D/g, '');
        const formattedPhone = rawPhone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        setSenderData(prevData => ({ ...prevData, phone: formattedPhone }));
    };

    const handleAvancarClick = () => {
        navigate('/destino');
        console.log(senderData)
    };

    return (
        <BackColor>
            <Retangule2>
                <h1>Olá, bem vindo a minha aplicação</h1>
                <p>A medida que for clicando em avançar, os dados aparecerão em cima. Não atualize a página durante o processo de cadastros dos dados,
                    caso atualize, volte para a etapa 1.
                    Obrigado!
                </p>
            </Retangule2>
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
                    <InputMask
                        mask="999.999.999-99"
                        value={senderData.cpf}
                        onChange={handleCpfChange}
                    >
                        {() => <TextField required id="outlined-required" label="CPF" />}
                    </InputMask>
                    <InputMask
                            mask="(99) 99999-9999"
                            value={senderData.phone}
                            onChange={handlePhoneChange}
                        >
                            {() => (
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Telefone"
                                />
                            )}
                        </InputMask>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        value={senderData.email}
                        onChange={event => setSenderData(prevData => ({ ...prevData, email: event.target.value }))}

                    />
                    <InputMask
                            mask="99999-999"
                            value={senderData.address.cep}
                            onChange={handleCepChange}
                        >
                            {() => (
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="CEP"
                                    name="cep"
                                />
                            )}
                        </InputMask>
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
                        onChange={event => {
                            const numericValue = event.target.value.replace(/\D/g, ''); 
                            handleAddressChange({ target: { name: 'number', value: numericValue } }); 
                        }}
                        inputProps={{
                            inputMode: "numeric", 
                        }}
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