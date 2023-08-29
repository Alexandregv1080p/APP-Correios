import React from "react";
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const BackColor = styled.div`
    background-color: #FFCD40;
    width: 100%;
    height: 965px;
    display: flex;
    align-items: center;
    justify-content: center;
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
const DadosPacote = ()=>{
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
        setLoading(true);
    }
    return (
        <BackColor>
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
        </BackColor>
    )
}

export default DadosPacote