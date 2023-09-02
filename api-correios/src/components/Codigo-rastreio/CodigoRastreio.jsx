import React from "react";
import styled from 'styled-components';
import { ContainerRetanguleCodigo, RetanguleCodigo } from "../../style";

const CodigoRastreio = ()=>{
    return(
        <ContainerRetanguleCodigo>
            <RetanguleCodigo>
                <img src="/assets/imgs/caminhao_correios-1 1.png" alt="" />
                <h1>Parabéns, seu item foi postado!</h1>
                <h2>O seu código de rastreio é:</h2>
                <h3>{}</h3>
            </RetanguleCodigo>
        </ContainerRetanguleCodigo>
    )
}

export default CodigoRastreio