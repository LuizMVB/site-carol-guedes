import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MensagemService from "../services/MensagemService";

const CGNav = () => {
    const msg = MensagemService.obterMensagem;
    const navegarPara = useNavigate();

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h5" component="div"
                    sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navegarPara('/')}>
                    {msg('padrao.label.nomeProjeto').toUpperCase()}
                </Typography>
                <Button color="inherit" onClick={() => navegarPara('/biografia')}>
                    <Typography variant="h6" component="div">
                        {msg('navbar.link.biografia')}
                    </Typography>
                </Button>
                <Button color="inherit" onClick={() => navegarPara('/propostas')}>
                    <Typography variant="h6" component="div">
                        {msg('navbar.link.propostas')}
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default CGNav;