import React from "react";
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import { ContainerBtn } from "../../style";
import { useNavigate } from 'react-router-dom';

const BackColor = styled.div`
    background-color: #FFCD40;
    width: 100%;
    height: 965px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

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
    const location = useLocation();
    const navigate = useNavigate();
    const handleAvancarClick = () => {
        navigate('/codigorastreio');
    }
    const { carrier, price, shipment, code } = location.state;
    const bestOption = shipment.find(option => option.carrier === carrier);
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
            <Retangule>
                <h1>Valor final do frete</h1>
                <p>O melhor para o seu destino é {carrier} com o valor de {price} e prazo de entrega.</p>
                {code && <p>Código de rastreio: {code}</p>}
                <h3>Sua melhor economia foi de {discount}</h3>
                <ContainerBtn>
                    <Button onClick={handleAvancarClick} variant="contained"
                        sx={{
                            width: 300
                        }}  
                    >Postar</Button>
                </ContainerBtn>
            </Retangule>
        </BackColor>
    );
};

export default ValorFinal;
