import { Facebook, Instagram, Message } from "@mui/icons-material";
import { Fab, Grow } from "@mui/material";
import { useState } from "react";
import RotasService from "../services/RotasService";

const BotoesContato = () => {

    const [isOpenOpcoesContato, openOpcoesContato] = useState(false);

    return <>
        <Grow
            in={isOpenOpcoesContato}
            style={{ transformOrigin: '10 1000 0' }}
            timeout={!isOpenOpcoesContato ? 1000 : 3000}
        >
            <Fab 
                sx={{position: 'fixed', bottom: 240, right: 10}}
                aria-label="like" 
                color="warning" 
                href={RotasService.Externas.INSTAGRAM}
            >
                <Instagram />
            </Fab>
        </Grow>
        <Grow
            in={isOpenOpcoesContato}
            style={{ transformOrigin: '10 1000 0' }}
            timeout={!isOpenOpcoesContato ? 3000 : 1000}
        >
            <Fab 
                sx={{position: 'fixed', bottom: 160, right: 10}}
                aria-label="like"
                href={RotasService.Externas.FACEBOOK}
            >
                <Facebook />
            </Fab>
        </Grow>
        <Fab sx={{position: 'fixed', bottom: 80, right: 10}}  aria-label="like" color="primary" onClick={() => openOpcoesContato(!isOpenOpcoesContato)}>
            <Message aria-describedby="contatos" />
        </Fab>
    </>
}

export default BotoesContato;