import React from "react";
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDataContext } from "../provedor-dados/DataProvider";
import { useNavigate } from 'react-router-dom';
import { BackColor, ContainerBtn, ContainerPacote, ContainerRetangule, GreenRetangule, IconContainer, OrangeContainerRetangule2, OrangeRetangule, Retangule } from "../../style";
import { FiArrowRight } from "react-icons/fi";
import axios from 'axios';



const FormField = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    height: 300px;
    margin: 50px;
    justify-content: flex-start;
`
const FormField2 = styled.div`
    margin-top:50px;
    width: 300px;
`
const FormField3 = styled.div`
    margin-top:50px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`


const DadosPacote = () => {
    const { senderData } = useDataContext();
    const { receiverData } = useDataContext();
    const { packageData, setPackageData } = useDataContext();

    const navigate = useNavigate();

    const handleUsuarioClick = () => {
        navigate('/');
    }
    const handleDestinoClick = () => {
        navigate('/destino');
    }

    const handleAvancarClick = async () => {
        try {
            const response = await axios.post('https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate', {
                sender: senderData,
                receiver: receiverData,
                package: packageData
            });
    
            const correio = response.data.carrier;
            const valor = response.data.price;
            navigate('/valorfinal', { state: { correio, valor } });
        } catch (error) {
            console.error('Erro ao calcular o frete:', error);
        }
    };
    
    const handleInformationChange = event => {
        const { name, value } = event.target;
        setPackageData(prevData => ({
            ...prevData,
            information: {
                ...prevData.information,
                [name]: value
            }
        }));
    };
    return (
        <BackColor>
            <OrangeContainerRetangule2>
                <OrangeRetangule onClick={handleUsuarioClick}>
                    <h3>Dados Origem</h3>
                    <p>{senderData.fullname} - {senderData.cpf}</p>
                    <p>{senderData.address.cep} - {senderData.address.state} - {senderData.address.uf} - {senderData.address.city}</p>
                    <p>{senderData.address.neighborhood} - {senderData.address.street} - {senderData.address.number} - {senderData.address.complement}</p>
                </OrangeRetangule>
                <IconContainer>
                    <FiArrowRight color="white" fontSize="1.5em" />
                </IconContainer>
                <GreenRetangule onClick={handleDestinoClick}>
                    <h3>Dados Origem</h3>
                    <p>{receiverData.fullname} - {receiverData.cpf}</p>
                    <p>{receiverData.address.cep} - {receiverData.address.state} - {receiverData.address.uf} - {receiverData.address.city}</p>
                    <p>{receiverData.address.neighborhood} - {receiverData.address.street} - {receiverData.address.number} - {receiverData.address.complement}</p>
                </GreenRetangule>
            </OrangeContainerRetangule2>
            <ContainerRetangule>
                <Retangule>
                    <h1>Dados do pacote de envio</h1>
                    <ContainerPacote>
                        <FormField>
                            <TextField
                                required
                                id="outlined-required"
                                label="Peso"
                                value={packageData.weight}
                                onChange={event => setPackageData(prevData => ({ ...prevData, weight: event.target.value }))}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Altura"
                                value={packageData.height}
                                onChange={event => setPackageData(prevData => ({ ...prevData, height: event.target.value }))}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Largura"
                                value={packageData.width}
                                onChange={event => setPackageData(prevData => ({ ...prevData, width: event.target.value }))}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Comprimento"
                                value={packageData.length}
                                onChange={event => setPackageData(prevData => ({ ...prevData, length: event.target.value }))}
                            />
                        </FormField>
                        <FormField2>
                            <FormControlLabel
                                sx={{
                                    display: 'block',
                                }}
                                label="Logistica Reversa"
                                control={
                                    <Switch
                                        checked={packageData.reverse}
                                        onChange={() => setPackageData(prevData => ({ ...prevData, reverse: !prevData.reverse }))}
                                        name=""
                                        color="primary"
                                    />
                                }

                            />
                            <FormControlLabel
                                sx={{
                                    display: 'block',
                                }}
                                control={
                                    <Switch
                                        checked={packageData.ar}
                                        onChange={() => setPackageData(prevData => ({ ...prevData, ar: !prevData.ar }))}
                                        color="primary"
                                    />
                                }
                                label="Aviso de recebimento"
                            />
                            <FormControlLabel
                                sx={{
                                    display: 'block',
                                }}
                                control={
                                    <Switch
                                        checked={packageData.own_hands}
                                        onChange={() => setPackageData(prevData => ({ ...prevData, own_hands: !prevData.own_hands }))}
                                        color="primary"
                                    />
                                }
                                label="Mãos próprias"
                            />
                        </FormField2>
                        <FormField3>
                            <TextField
                                required
                                id="outlined-required"
                                label="Valor da mercadoria"
                                name="amount"
                                value={packageData.information.amount}
                                onChange={handleInformationChange}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Quantidade de items"
                                name="quantity"
                                value={packageData.information.quantity}
                                onChange={handleInformationChange}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Descrição dos items"
                                multiline
                                rows={10}
                                fullWidth
                                name="description"
                                value={packageData.information.description}
                                onChange={handleInformationChange}
                            />
                        </FormField3>
                    </ContainerPacote>
                    <ContainerBtn>
                        <Button variant="contained"
                        onClick={handleAvancarClick}
                            sx={{
                                width: 300
                            }}
                        >Avançar</Button>                    
                    </ContainerBtn>
                </Retangule>
            </ContainerRetangule>
        </BackColor>
    )
}

export default DadosPacote