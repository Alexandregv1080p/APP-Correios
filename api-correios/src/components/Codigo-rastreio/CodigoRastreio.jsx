import React from "react";
import styled from 'styled-components';
import { ContainerBtn, ContainerRetanguleCodigo, RetanguleCodigo } from "../../style";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDataContext } from "../provedor-dados/DataProvider";

const CodigoRastreio = ()=>{
    const { clearAllData } = useDataContext();

    let { code } = useParams();
    const navigate = useNavigate();

    const handleAvancarClick = () => {
        navigate("/")
        clearAllData();
    }

    return(
        <ContainerRetanguleCodigo>
            <RetanguleCodigo>
                <img src="/assets/imgs/caminhao_correios-1 1.png" alt="" />
                <h1>Parabéns, seu item foi postado!</h1>
                <h2>O seu código de rastreio é:</h2>
                <h3><strong>{code}</strong></h3>
                <ContainerBtn>
                    <Button onClick={handleAvancarClick} variant="contained"
                        sx={{
                            width: 300,
                            marginTop: 6
                        }}  
                    >Nova Postagem</Button>
                </ContainerBtn>
            </RetanguleCodigo>
            
        </ContainerRetanguleCodigo>
    )
}

export default CodigoRastreio