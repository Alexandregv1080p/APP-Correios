import React from "react";
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import { BackColor, BlueRetangule, ContainerBtn, ContainerRetangule, GreenRetangule, IconContainer, OrangeContainerRetangule2, OrangeRetangule, RetanguleFinal } from "../../style";
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import { useDataContext } from "../provedor-dados/DataProvider";


const Retangule = styled.div`
    width: 1235px;
    height: 500px;
    background-color: #E1E1E1;
    border-radius: 20px;
    & h1, p {
        text-align: center;
    }
`;

const ValorFinal = () => {
    const { senderData } = useDataContext();

    const { receiverData } = useDataContext();

    const { packageData } = useDataContext();

    const location = useLocation();

    const navigate = useNavigate();

    const handleUsuarioClick = () => {
        navigate('/');
    }
    const handleDestinoClick = () => {
        navigate('/destino');
    }
    const handlePacoteClick = () => {
        navigate('/pacotes');
    }

    const handleAvancarClick = () => {
        navigate('/codigorastreio');
    }

    const { carrier, price, shipment, code } = location.state;
    const { reverse, ar, own_hands } = location.state;

    const bestOption = shipment.find(option => option.carrier === carrier);

    console.log(bestOption)
    if (!bestOption) {
        return (
            <BackColor>
                <Retangule>
                    <h1>Nenhuma opção de frete encontrada.</h1>
                </Retangule>
            </BackColor>
        );
    }

    const { discount } = bestOption;
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
                <IconContainer>
                    <FiArrowRight color="white" fontSize="1.5em" />
                </IconContainer>
                <BlueRetangule onClick={handlePacoteClick}>
                <h3>Dados Origem</h3>
                    <p><strong>AxLxC:</strong>{packageData.height}x{packageData.width}x{packageData.length}</p>
                    <p><strong>Logistica Reversa:</strong>{packageData.reverse == false ? "Não" : "Sim"}</p>
                    <p><strong>Mãos próprias:</strong>{own_hands ? "Sim" : "Não"}</p>
                    <p><strong>Aviso de recebimento:</strong>{ar ? "Sim" : "Não"}</p>
                </BlueRetangule>
            </OrangeContainerRetangule2>
            <ContainerRetangule>
            <RetanguleFinal>
                <h1>Valor final do frete</h1>
                <p>O melhor para o seu destino é {carrier} com o valor de R${price} e prazo de entrega de 5 dias úteis.</p>
                {code && <p>Código de rastreio: {code}</p>}
                <h3>Sua melhor economia foi de R${discount}</h3>
                <ContainerBtn>
                    <Button onClick={handleAvancarClick} variant="contained"
                        sx={{
                            width: 300,
                            marginTop: 11
                        }}  
                    >Postar</Button>
                </ContainerBtn>
            </RetanguleFinal>
            </ContainerRetangule>
        </BackColor>
    );
};

export default ValorFinal;
