import React from "react";
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from "../provedor-dados/DataProvider";

const BackColor = styled.div`
    background-color: #FFCD40;
    width: 100%;
    height: 965px;
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
const OrangeRetangule = styled.div`
    width: 300px;
    height: 130px;
    background-color: #cf9f1c;
    border-radius: 40px;
    margin-bottom: 50px;
    transform: translateX(-50%);
    text-align: center;
    cursor: pointer;
    & p{
        color: white;
        margin-top: 10px;
    }
`
const OrangeContainerRetangule = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    position: relative;
`
const ContainerRetangule = styled.div`
    background-color: #FFCD40;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 100px;
`

//aqui é o 
const DadosDestino = () => {
    const { senderData } = useDataContext();
    const {receiverData, setReceiverData} = useDataContext()
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
    const handleVoltarClick = () => {
        navigate('/');
    }
    const handleAvancarClick = () => {
        navigate('/pacotes');
    }
    return (
        <BackColor>
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
                            onChange={event => setReceiverData(prevData =>({...prevData,fullname: event.target.value}))}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="CPF"
                            value={receiverData.cpf}
                            onChange={event => setReceiverData(prevData =>({...prevData,cpf: event.target.value}))}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Telefone"
                            value={receiverData.phone}
                            onChange={event => setReceiverData(prevData =>({...prevData,phone: event.target.value}))}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            value={receiverData.email}
                            onChange={event => setReceiverData(prevData =>({...prevData,email: event.target.value}))}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="CEP"
                            name="cep"
                            value={receiverData.address.cep}
                            onChange={handleAddressChange}
                        />
                    </FormField>
                    <FormField>
                        <TextField
                            required
                            id="outlined-required"
                            label="Estado"
                            name="state"
                            value={receiverData.address.state}
                            onChange={handleAddressChange}
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
                            onChange={handleAddressChange}
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
                            width:300
                        }}
                        >Avançar</Button>                    </ContainerBtn>
                </Retangule>
                
            </ContainerRetangule>
        </BackColor>
    )
}

export default DadosDestino