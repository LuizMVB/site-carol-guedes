import { Send } from "@mui/icons-material";
import { Button, Card, CardContent, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DeviceFrameset } from "react-device-frameset";
import Instagram from '../static/images/instagram.jpeg';

import MensagemService from "../services/MensagemService";
import RotasService from "../services/RotasService";

import '../static/css/marvel-devices.css';

const Home = () => {

    const msg = MensagemService.obterMensagem;

    return (
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{xs: 0, sm: 4}}
            alignItems="center" justifyContent="center">
            <Box sx={{ m: 'auto', pb: 8 }}>
                <Typography variant="h3" textAlign="center" fontWeight={400}>
                    {msg('padrao.label.nomeProjeto')}
                </Typography>
                <br />
                <Typography variant="h5" fontStyle="italic"
                    textAlign="center">
                    {msg('home.label.subtitle')}
                </Typography>
                <br />
                <Typography variant="p" fontStyle="italic"
                    textAlign="center">
                    {msg('home.label.subtitle1')}
                </Typography>
                <br />
                <br />
                <a href={RotasService.Externas.FORMULARIO_INSCRICAO_CAMPANHA}>
                    <Button variant="contained" endIcon={<Send></Send>}
                        sx={{ minWidth: '100%' }}>
                        {msg('home.ajudarNaCampanha')}
                    </Button>
                </a>
                
            </Box>
            <Box>
                <DeviceFrameset device="iPhone 8 Plus" color="black" height="350px" width="250px">
                    <img src={Instagram} height="355px" width="250px"></img>
                </DeviceFrameset>
            </Box>
        </Stack>
    )
}

export default Home;