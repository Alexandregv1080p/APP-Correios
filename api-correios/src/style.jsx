import styled from 'styled-components';

// Dados Usuario
export const BackColor = styled.div`
    background-color: #FFCD40;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Retangule = styled.div`
    width: 90vw;
    max-width: 1235px;
    height: auto;
    background-color: #E1E1E1;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
    margin-top: 20px;
    @media(max-width:561px){
        width: 80vw;
    }
`;
export const Retangule2 = styled.div`
    width: 90vw;
    max-width: 835px;
    height: auto;
    margin-bottom: 20px;
    background-color: #E1E1E1;
    border-radius: 20px;
    text-align: center;
    margin-top: 10px;
    padding: 20px;
    @media(max-width:561px){
        width: 80vw;
    }
`;

export const FormField = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    position: relative;
    margin: 2vw;
`;
export const FormFieldUsuario = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    position: relative;
    margin: 2vw;
    @media(max-width: 1221px){
        justify-content: center;
        flex-direction: column;
    }
`;

export const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2vw;
`;

// Dados destino
export const BackColor2 = styled.div`
    background-color: #FFCD40;
    width: 100%;
    min-height: 100vh;
`;
export const FormFieldDestino = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    position: relative;
    margin: 2vw;
    @media(max-width: 1221px){
        justify-content: center;
        flex-direction: column;
    }
`;
export const OrangeContainerRetangule = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
    margin: 0 auto;
`;

export const OrangeRetangule = styled.div`
    width: 90vw;
    max-width: 400px;
    height: auto;
    background-color: #cf9f1c;
    border-radius: 40px;
    margin-bottom: 5vw;
    transform: translateX(-50%);
    text-align: center;
    margin-left: 395px;
    cursor: pointer;
    
    & p{
        color: white;
        margin-top: 10px;
        position: relative;
    }
`;

export const ContainerRetangule = styled.div`
    background-color: #FFCD40;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 5vw;
`;

// Dados Pacote
export const GreenRetangule = styled.div`
    width: 90vw;
    max-width: 400px;
    height: auto;
    background-color: #31cf1c;
    border-radius: 40px;
    margin-bottom: 5vw;
    transform: translateX(-50%);
    text-align: center;
    cursor: pointer;
    & p{
        color: white;
        margin-top: 10px;
        position: relative;
    }
    @media(max-width:1100px){
        
        margin-left: 395px;
    }
`;
export const FormFieldPacote1 = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;   
    justify-items: center;
    position: relative;
    margin: 2vw;

    @media (max-width: 1100px) {
        width: 100%; 
        margin: 1vw; 
    }
`;
export const IconContainer = styled.div`
    width: 100vw;
    max-width: 300px;
    margin-left: -5vw;
    margin-top: 1vw;
    border-radius: 40px;
    transform: translateX(-50%);
    font-size: 3vw;
    text-align: center;
    @media(max-width:1100px){
        display: none;
    }
`;

export const IconContainer2 = styled.div`
    width: 100vw;
    max-width: 300px;
    margin-left: -5vw;
    margin-top: 1vw;
    border-radius: 40px;
    transform: translateX(-50%);
    font-size: 3vw;
    text-align: center;
`;

export const ContainerPacote = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1200px;
    @media(max-width: 1100px){
        flex-direction: column;
    }
`;

export const OrangeContainerRetangule2 = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    width: 100%;
    @media(max-width:1100px){
        flex-direction: column;
        align-items: center;
       
    }
`;

// Valor Final
export const RetanguleFinal = styled.div`
    width: 90vw;
    max-width: 1235px;
    height: auto;
    background-color: #E1E1E1;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
    margin-top: 20px;
`;

export const OrangeContainerRetangule3 = styled.div`
    display: flex;
    justify-content: end;
    padding-top: 10px;
    margin-top: -10vw;
    width: 100%;
    
`;
export const FormField2 = styled.div`
    margin-top: 50px;
    width: 300px;
    display: flex;
    flex-direction: column;
`
export const BlueRetangule = styled.div`
    width: 90vw;
    max-width: 400px;
    height: auto;
    background-color: #1427d0;
    border-radius: 40px;
    margin-bottom: 5vw;
    transform: translateX(-50%);
    cursor: pointer;
    & h3{
        text-align: center;
    }
    & p{
        color: white;
        margin-top: 1vw;
        position: relative;
        margin-left: 1vw;
        font-size: 1vw;
    }
`;
export const FormField3 = styled.div`
    margin-top:50px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media(max-width:550px){
        flex-direction: column;
    }
`
// Codigo Rastreio
export const RetanguleCodigo = styled.div`
    width: 90vw;
    max-width: 1235px;
    height: auto;
    background-color: #E1E1E1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
    margin-top: 20px;
`;

export const ContainerRetanguleCodigo = styled.div`
    background-color: #ffffff;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-top: 5vw;
`;
