import styled from 'styled-components'

// Dados Usuario
export const BackColor = styled.div`
    background-color: #FFCD40;
    width: 100%;
    height: 965px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Retangule = styled.div`
    width: 1235px;
    height:500px;
    background-color: #E1E1E1;
    border-radius: 20px;
    & h1{
        text-align: center;
        margin-top: 20px;
    }
`
export const Retangule2 = styled.div`
    width: 835px;
    height:120px;
    margin-bottom: 20px;
    background-color: #E1E1E1;
    border-radius: 20px;
    & h1,p{
        text-align: center;
        margin-top: 10px;
    }
`
export const FormField = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    position: relative;
    margin: 50px;
    margin-bottom: 20px;
`
export const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
`
//Dados destino
export const BackColor2 = styled.div`
    background-color: #FFCD40;
    width: 100%;
    height: 965px;
`
export const OrangeContainerRetangule = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
`
export const OrangeRetangule = styled.div`
    width: 400px;
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
        position: relative;
    }
`
export const ContainerRetangule = styled.div`
    background-color: #FFCD40;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 100px;
`
//Dados Pacote
export const GreenRetangule = styled.div`
    width: 400px;
    height: 130px;
    background-color: #31cf1c;
    border-radius: 40px;
    margin-bottom: 50px;
    transform: translateX(-50%);
    text-align: center;
    cursor: pointer;
    & p{
        color: white;
        margin-top: 10px;
        position: relative;
    }
`
export const IconContainer = styled.div`
    width: 300px;
    margin-left: -75px;
    margin-top: 30px;
    border-radius: 40px;
    transform: translateX(-50%);
    font-size: 40px;
    text-align: center;
`

export const ContainerPacote = styled.div`
    display: flex;
    justify-content: center;
    width:1200px;
`
export const OrangeContainerRetangule2 = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    margin-top:-150px;
`
//Valor Final
export const RetanguleFinal = styled.div`
    width: 1235px;
    height:400px;
    background-color: #E1E1E1;
    border-radius: 20px;
    & h1,h3,p{
        text-align: center;
        margin-top: 20px;
    }
`
export const BlueRetangule = styled.div`
    width: 400px;
    height: 150px;
    background-color: #1427d0;
    border-radius: 40px;
    margin-bottom: 50px;
    transform: translateX(-50%);
    cursor: pointer;
    & h3{
        text-align: center;
    }
    & p{
        color: white;
        margin-top: 10px;
        position: relative;
        margin-left: 15px;
        font-size: 13px;
    }
`