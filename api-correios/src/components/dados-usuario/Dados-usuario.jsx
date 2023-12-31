import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDataContext } from "../provedor-dados/DataProvider";
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import axios from 'axios';
import { BackColor, Retangule, Retangule2, FormField, ContainerBtn, FormFieldUsuario} from "../../style";
import validateCPF from "../ValidaCPF/ValidateCPF";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

const DadosUsuario = () => {
    const { senderData, setSenderData } = useDataContext();
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const isFormValid = 
            senderData.fullname !== "" &&
            senderData.cpf !== "" &&
            senderData.phone !== "" &&
            senderData.email !== "" &&  
            senderData.address.cep !== "" &&
            senderData.address.state !== "" &&
            senderData.address.uf !== "" &&
            senderData.address.city !== "" &&
            senderData.address.neighborhood !== "" &&
            senderData.address.street !== "" &&
            senderData.address.number !== "";

        setIsValid(isFormValid);
    }, [senderData]);

    const navigate = useNavigate();

    //Funções que irá lidar com a validação do CPF

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

        setSenderData(prevData => ({ ...prevData, cpf: formattedCpf }));
    };

    //Funções que irão realizar a validação do CEP changing
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
    const handleCloseSnackbar = () => {
        setSnackbarOpen(false); 
      };
    const handleAvancarClick = () => {
        
        if (isValid) {
            navigate('/destino');
        } else {
            setSnackbarOpen(true); 
        }
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
                <FormFieldUsuario>
                    <TextField
                        required
                        id="outlined-required"
                        label="Nome completo"
                        value={senderData.fullname}
                        onChange={(event) => {
                            const inputValue = event.target.value;
                            const regex = /^[A-Za-z\s]*$/; 

                            if (regex.test(inputValue)) {
                                setSenderData((prevData) => ({ ...prevData, fullname: inputValue }));
                            }
                        }}
                    />

                    <InputMask
                        mask="999.999.999-99"
                        value={senderData.cpf}
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
                </FormFieldUsuario>
                <FormFieldUsuario>
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
                            marginTop: 2
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
                            marginTop: 2
                        }}
                        id="outlined-required"
                        label="Complemento"
                        name="complement"
                        value={senderData.address.complement}
                        onChange={handleAddressChange}
                    />
                </FormFieldUsuario>
                <ContainerBtn>
                    <Button onClick={handleAvancarClick} variant="contained"
                        sx={{
                            width: 300
                        }}
                    >Avançar</Button>
                </ContainerBtn>

            </Retangule>
            <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={6000} // Define a duração que a Snackbar ficará visível (em milissegundos)
        onClose={handleCloseSnackbar}
        message="Por favor, preencha todos os campos obrigatórios."
      />               
        </BackColor>
    )
}

export default DadosUsuario