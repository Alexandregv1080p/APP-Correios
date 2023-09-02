import React, { useState } from "react";
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from "../provedor-dados/DataProvider";
import InputMask from 'react-input-mask';
import axios from 'axios';
import { BackColor2, ContainerBtn, ContainerRetangule, FormField, OrangeContainerRetangule, OrangeRetangule, Retangule } from "../../style";
import validateCPF from "../ValidaCPF/ValidateCPF";

//aqui é o Receiver
const DadosDestino = () => {
    const { senderData } = useDataContext();

    const { receiverData, setReceiverData } = useDataContext()

    const handleAddressChange = event => {
        const { name, value } = event.target;
        setReceiverData(prevData => ({
            ...prevData,
            address: {
                ...prevData.address,
                [name]: value
            }
        }));
    };

    const navigate = useNavigate();

    const [isCpfValid, setIsCpfValid] = useState(true);

    const cpfHint = "CPF inválido. Digite um CPF válido.";

    const handleCpfChange = event => {
        const rawCpf = event.target.value.replace(/\D/g, '');
        let formattedCpf = event.target.value;

        if (validateCPF(rawCpf)) {
            formattedCpf = rawCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
            setIsCpfValid(true);
        } else {
            setIsCpfValid(false);
        }

        setReceiverData(prevData => ({ ...prevData, cpf: formattedCpf }));
    };

    const handlePhoneChange = event => {
        const rawPhone = event.target.value.replace(/\D/g, '');
        const formattedPhone = rawPhone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        setReceiverData(prevData => ({ ...prevData, phone: formattedPhone }));
    };

    const handleCepChange = async event => {
        const rawCep = event.target.value.replace(/\D/g, '');
        const formattedCep = rawCep.replace(/(\d{5})(\d{3})/, "$1-$2");
        setReceiverData(prevData => ({
            ...prevData,
            address: {
                ...prevData.address,
                cep: formattedCep,
            },
        }));
        //Aqui será a função que basicamente irá validar os meus dados no viacep
        if (rawCep.length === 8) {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${rawCep}/json/`);
                const addressData = response.data;

                if (!addressData.erro) {
                    setReceiverData(prevData => ({
                        ...prevData,
                        address: {
                            ...prevData.address,
                            state: addressData.uf,
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


    const handleVoltarClick = () => {
        navigate('/');
    }

    const handleAvancarClick = () => {
        navigate('/pacotes');
    }
    return (
        <BackColor2>
            <OrangeContainerRetangule>
                <OrangeRetangule onClick={handleVoltarClick}>
                    <h3>Dados Origem</h3>
                    <p>{senderData.fullname} - {senderData.cpf}</p>
                    <p>{senderData.address.cep} - {senderData.address.state} - {senderData.address.uf} - {senderData.address.city}</p>
                    <p>{senderData.address.neighborhood} - {senderData.address.street} - {senderData.address.number} - {senderData.address.complement}</p>
                </OrangeRetangule>

            </OrangeContainerRetangule>
            <ContainerRetangule>
                <Retangule>
                    <h1>Dados de destino</h1>
                    <FormField>
                        <TextField
                            required
                            id="outlined-required"
                            label="Nome completo"
                            value={receiverData.fullname}
                            onChange={(event) => {
                                const inputValue = event.target.value;
                                const regex = /^[A-Za-z\s]*$/;

                                if (regex.test(inputValue)) {
                                    setReceiverData((prevData) => ({ ...prevData, fullname: inputValue }));
                                }
                            }}
                        />
                        <InputMask
                            mask="999.999.999-99"
                            value={receiverData.cpf}
                            onChange={handleCpfChange}
                        >
                            {() => <TextField
                                required
                                id="outlined-required"
                                label="CPF"
                                error={!isCpfValid}
                                helperText={!isCpfValid ? cpfHint : ''}
                            />}
                        </InputMask>
                        <InputMask
                            mask="(99) 99999-9999"
                            value={receiverData.phone}
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
                            value={receiverData.email}
                            onChange={event => setReceiverData(prevData => ({ ...prevData, email: event.target.value }))}
                        />
                        <InputMask
                            mask="99999-999"
                            value={receiverData.address.cep}
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
                            value={receiverData.address.state}
                            onChange={(event) => {
                                const inputValue = event.target.value;
                                const regex = /^[A-Za-z\s]*$/;

                                if (regex.test(inputValue)) {
                                    setReceiverData((prevData) => ({
                                        ...prevData,
                                        address: { ...prevData.address, state: inputValue },
                                    }));
                                }
                            }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Cidade"
                            name="city"
                            value={receiverData.address.city}
                            onChange={handleAddressChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Bairro"
                            name="neighborhood"
                            value={receiverData.address.neighborhood}
                            onChange={handleAddressChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Rua"
                            name="street"
                            value={receiverData.address.street}
                            onChange={handleAddressChange}
                        />
                        <TextField

                            required
                            id="outlined-required"
                            label="Número"
                            name="number"
                            value={receiverData.address.number}
                            onChange={event => {
                                const numericValue = event.target.value.replace(/\D/g, '');
                                handleAddressChange({ target: { name: 'number', value: numericValue } });
                            }}
                            inputProps={{
                                inputMode: "numeric",
                            }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Complemento"
                            name="complement"
                            value={receiverData.address.complement}
                            onChange={handleAddressChange}
                            sx={{
                                marginTop: 2
                            }}
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

            </ContainerRetangule>
        </BackColor2>
    )
}

export default DadosDestino