import { useState } from 'react';

import { Fab, Grow, Stack } from '@mui/material';
import { Message, Instagram, Facebook } from '@mui/icons-material';

import RotasService from '../services/RotasService';

const CGBotoesContato = () => {
    const [isOpenOpcoesContato, openOpcoesContato] = useState(false);

    return (
        <Stack
            position="fixed"
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{ width: "98%", height: "85%", zIndex: 1 }}
            spacing={2}
        >
            <Grow in={isOpenOpcoesContato}
                style={{ transformOrigin: '0 1000 0' }}
                timeout={isOpenOpcoesContato ? 2000 : 1000}
            >
                <Fab 
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
                timeout={!isOpenOpcoesContato ? 2000 : 1000}
            >
                <Fab 
                    aria-label="like" 
                    color="secondary" 
                    href={RotasService.Externas.FACEBOOK}
                >
                    <Facebook />
                </Fab>
            </Grow>
            <Fab aria-label="like" color="primary" onClick={() => openOpcoesContato(!isOpenOpcoesContato)}>
                <Message aria-describedby="contatos" />
            </Fab>
        </Stack>
    )
}

export default CGBotoesContato;