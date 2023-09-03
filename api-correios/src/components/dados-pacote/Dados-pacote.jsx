import React from "react";
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDataContext } from "../provedor-dados/DataProvider";
import { useNavigate } from 'react-router-dom';
import { BackColor, ContainerBtn, ContainerPacote, ContainerRetangule, FormField2, FormField3, FormFieldPacote1, GreenRetangule, IconContainer, OrangeContainerRetangule2, OrangeRetangule, Retangule } from "../../style";
import { FiArrowRight } from "react-icons/fi";
import axios from 'axios';

const ResponsiveFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const ResponsiveFlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;
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

    const calculateShipping = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/shipping_calculate', {
                sender: senderData,
                receiver: receiverData,
                package: packageData
                
            });
            console.log(response.data)
            const { carrier, price, shipment,discount } = response.data;
    
            if (shipment && shipment.length > 0) {
                const bestOption = shipment.reduce((prev, current) => prev.price < current.price ? prev : current);
                
                const trackingResponse = await axios.post('https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/posting', {
                    calculated_id: bestOption._id
                });
    
                const trackingCode = trackingResponse.data.code;
    
                navigate('/valorfinal', {
                    state: {
                        carrier: bestOption.carrier,
                        price: bestOption.price,
                        shipment: shipment,
                        code: trackingCode,
                        reverse: packageData.reverse,
                        ar: packageData.ar,
                        own_hands: packageData.own_hands
                    }
                });
            } else {
                console.error('No shipping options available.');
            }
        } catch (error) {
            console.error('Erro ao calcular o frete:', error);
        }
    };
    

    const handleInformationChange = event => {
        const { name, value } = event.target;
        if (!isNaN(value)) {
            setPackageData(prevData => ({
                ...prevData,
                information: {
                    ...prevData.information,
                    [name]: value,
                },
            }));
        };
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
                        <FormFieldPacote1>
                            <TextField
                                required
                                id="outlined-required"
                                label="Peso"
                                value={packageData.weight}
                                onChange={event => {
                                    const newValue = event.target.value;
                                    if (!isNaN(newValue)) {
                                        setPackageData(prevData => ({ ...prevData, weight: newValue }));
                                    }
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Altura"
                                value={packageData.height}
                                onChange={event => {
                                    const newValue = event.target.value;
                                    if (!isNaN(newValue)) {
                                        setPackageData(prevData => ({ ...prevData, height: newValue }));
                                    }
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Largura"
                                value={packageData.width}
                                onChange={event => {
                                    const newValue = event.target.value;
                                    if (!isNaN(newValue)) {
                                        setPackageData(prevData => ({ ...prevData, width: newValue }));
                                    }
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Comprimento"
                                value={packageData.length}
                                onChange={event => {
                                    const newValue = event.target.value;
                                    if (!isNaN(newValue)) {
                                        setPackageData(prevData => ({ ...prevData, length: newValue }));
                                    }
                                }}
                            />
                        </FormFieldPacote1>
                        <FormField2>
                            <FormControlLabel
                                
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
                                
                                control={
                                    <Switch
                                        checked={packageData.ar}
                                        
                                        onChange={() => {
                                            setPackageData(prevData => ({ ...prevData, ar: !prevData.ar }))}
                                        }
                                        color="primary"
                                    />
                                }
                                label="Aviso de recebimento"
                            />
                            <FormControlLabel
                                
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
                            onClick={calculateShipping}
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