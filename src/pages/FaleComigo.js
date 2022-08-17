import { Send } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import MensagemService from "../services/MensagemService";

const FaleComigo = () => {
    const msg = MensagemService.obterMensagem;
    const [titulo, setTitulo] = useState();
    const [corpo, setCorpo] = useState();

    const enviarEmail = (titulo, corpo, email) => {
        let urlMailTo = "mailto:falecomigocarolguedes@gmail.com"
            + "&subject=" + encodeURIComponent(titulo)
            + "&body=" + encodeURIComponent(corpo);
        window.location.href = urlMailTo;
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '100%' },
                pr: 4,
                px: {sm: 15}
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h3" textAlign="center" fontWeight={400}>
                {msg('padrao.label.nomeProjeto')}
            </Typography>
            <br></br>
            <br></br>
            <div>
            <TextField
                    id="titulo"
                    label={msg('padrao.titulo')}
                    placeholder={msg('padrao.entreSeuTituloAqui')}
                    variant="filled"
                    onChange={(event) => setTitulo(event.target.value)}
                />
            </div>
            <br></br>
            <div>
            <TextField
                    id="corpo"
                    label={msg('padrao.corpo')}
                    multiline
                    rows={4}
                    defaultValue={msg("padrao.corpo.defaultValue")}
                    variant="filled"
                    onChange={(event) => setCorpo(event.target.value)}
                />
            </div>
            <br></br>
            <br></br>
            <div> 
            <Button variant="contained" endIcon={<Send></Send>}
                    
                    sx={{ p: 2, ml:2, minWidth: '100%' }}
                    onClick={() => enviarEmail(titulo, corpo)}>
                        {msg('padrao.enviar')}
            </Button>
            </div>
            <br></br>
            <br></br>
        </Box>
    );
}

export default FaleComigo;