import React from "react";
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDataContext } from "../provedor-dados/DataProvider";
import { useNavigate } from 'react-router-dom';

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
const Container = styled.div`
    display: flex;
    justify-content: center;
    width:1200px;
`

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
const OrangeContainerRetangule = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    position: relative;
`
const OrangeRetangule = styled.div`
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
const ContainerRetangule = styled.div`
    background-color: #FFCD40;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 100px;
`

const DadosPacote = () => {
    const { senderData } = useDataContext();
    const { receiverData } = useDataContext();
    const { packageData, setPackageData } = useDataContext();

    const [loading, setLoading] = React.useState(true);

    const navigate = useNavigate();

    const handleVoltarClick = () => {
        navigate('/');
    }

    function handleClick() {
        setLoading(true);
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
                    <h1>Dados do pacote de envio</h1>
                    <Container>
                        <FormField>
                            <TextField
                                required
                                id="outlined-required"
                                label="Peso"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Altura"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Largura"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Comprimento"

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
                                        checked={loading}
                                        onChange={() => setLoading(!loading)}
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
                                        checked={loading}
                                        onChange={() => setLoading(!loading)}
                                        name=""
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
                                        checked={loading}
                                        onChange={() => setLoading(!loading)}
                                        name=""
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
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Quantidade de items"
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Descrição dos items"
                                multiline
                                rows={10}
                                fullWidth
                            />
                        </FormField3>
                    </Container>
                    <Button variant="contained">Avançar</Button>

                </Retangule>
            </ContainerRetangule>
        </BackColor>
    )
}

export default DadosPacote