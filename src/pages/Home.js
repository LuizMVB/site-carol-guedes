import { Send } from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DeviceFrameset } from "react-device-frameset";
import Instagram from '../static/images/instagram.jpeg';
import ProjetoPlanetarioMoradoresRua from '../static/images/projetoPlanetarioMoradoresRua.jpg';
import BibliotecaEcioSalles from '../static/images/bibliotecaEcioSalles.jpeg';
import PassaporteCultural from '../static/images/passaporteCultural.jpg';

import MensagemService from "../services/MensagemService";

import '../static/css/marvel-devices.css';
import CGImageCard from "../componentes/CGImageCard";

const presentationStyle = {
    pt: { xs: 2, sm: 8, md: 10 },
    px: { xs: 2, sm: 8, md: 12 },
}

const Home = () => {

    const msg = MensagemService.obterMensagem;

    const conteudoCardsDestaques = [
        {
            title: msg('home.destaques.cards.title.bibliotecaEcioSalles'),
            content: msg('home.destaques.cards.content.bibliotecaEcioSalles'),
            image: BibliotecaEcioSalles,
            onClickPath: 'https://prefeitura.rio/cultura/biblioteca-%e2%80%8b%e2%80%8becio-salles%e2%80%8b-espaco-inaugurado-no-%e2%80%8bplanetario-da-gavea%e2%80%8b-ganha-nome-de-criador-da-flup%e2%80%8b%e2%80%8b/'
        },
        {
            title: msg('home.destaques.cards.title.projetoPlanetarioMoradoresRua'),
            content: msg('home.destaques.cards.content.projetoPlanetarioMoradoresRua'),
            image: ProjetoPlanetarioMoradoresRua,
            onClickPath: 'https://g1.globo.com/rj/rio-de-janeiro/noticia/2021/08/28/alcancando-as-estrelas-projeto-promove-visita-de-pessoas-em-situacao-de-rua-ao-planetario-do-rio.ghtml'
        },
        {
            title: msg('home.destaques.cards.title.passaporteCultural'),
            content: msg('home.destaques.cards.content.passaporteCultural'),
            image: PassaporteCultural,
            onClickPath: 'https://revistamuseu.com.br/site/br/o-escriba/14457-14-06-2022-rj-passaporte-cultural-completa-um-ano-de-democratizacao-do-acesso-a-cultura.html?iccaldate=2036-06-1#:~:text=RIO%20DE%20JANEIRO%2C%20Rio%20de%20Janeiro%20-%20Programa,mil%20atendimentos%20durante%20o%20primeiro%20ano%20de%20funcionamento.'
        }
    ];

    return (
        
        <Box sx={presentationStyle}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{xs: 0, sm: 4}}
                alignItems="center" justifyContent="center">
                <Box sx={{ m: 'auto', pb: 8 }}>
                    <Typography variant="h3" textAlign="center">
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
                    <Button variant="contained" endIcon={<Send></Send>}
                        sx={{ minWidth: '100%' }}>
                        {msg('home.ajudarNaCampanha')}
                    </Button>
                </Box>
                <Box>
                    <DeviceFrameset device="iPhone 8 Plus" color="black" height="450px" width="300px">
                        <img src={Instagram} height="460px" width="300px"></img>
                    </DeviceFrameset>
                </Box>
            </Stack>
            <Box sx={{my: 4}}>
                <Typography variant="h3" textAlign="center">
                    {msg('home.label.destaques')}
                </Typography>
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{xs: 2, sm: 4}}
                alignItems="center" justifyContent="center">
                {conteudoCardsDestaques.map(cardContent => 
                    <Box sx={{ m: 'auto', pb: 8}} key={cardContent.onClickPath}>
                        <CGImageCard imgSrc={cardContent.image}
                            title={cardContent.title}
                            onClickPath={cardContent.onClickPath} 
                            content={cardContent.content}
                        >
                        </CGImageCard>
                    </Box>
                )}
            </Stack>
        </Box>
    )
}

export default Home;