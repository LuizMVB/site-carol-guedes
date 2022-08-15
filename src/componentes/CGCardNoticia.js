import { Box, Link, Paper, Typography } from "@mui/material";
import MensagemService from "../services/MensagemService";

function CGCardNoticia({
    imgSrc,
    title,
    description,
    href
}){
    const msg = MensagemService.obterMensagem;
    const estiloCardNoticia = {
        m: 'auto', backgroundColor: 'primary.light', 
        color: '#f7eded', borderRadius: 4
    };
    return (
        <Paper sx={estiloCardNoticia} elevation={5}>
            <img src={imgSrc} width="100%"></img>
            <Typography 
                variant="h4" 
                textAlign="center"
                component="div"
                sx={{backgroundColor: '#3a5592ab', p: 1, borderRadius: 1}}
            >
                {title}
            </Typography>
            <Box sx={{p: 2}}>
                <Typography 
                    variant="p"
                    fontSize={18}
                    component="div"
                    textAlign="center"
                >
                    {description}
                </Typography>
            </Box>
            <Box sx={{textAlign: 'center', backgroundColor: '#3a5592ab', py: 1, borderRadius: 2}}>
                <a href={href} style={{color: 'white', textDecoration: 'none'}}>
                    <b>{msg('padrao.vejaMais')}</b>
                </a>
            </Box>
        </Paper>
    );
}

export default CGCardNoticia;