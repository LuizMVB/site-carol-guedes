import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MensagemService from "../services/MensagemService";
import CGCardNoticia from "../componentes/CGCardNoticia";
import conteudoCardsDestaques from "../static/js/dadosNoticias";

const Noticias = () => {
    const msg = MensagemService.obterMensagem;
    return <>
        <Box>
            <Typography variant="h3" textAlign="center" fontWeight={400}>
                {msg('home.label.destaques')}
            </Typography>
        </Box>
        <br></br>
        <Stack direction="column" spacing={{xs: 2, sm: 4}}
            alignItems="center" justifyContent="center" px={{sm: 20}}>
            {conteudoCardsDestaques.map((cardContent, index) => 
                <CGCardNoticia
                    key={index}
                    imgSrc={cardContent.image}
                    title={cardContent.title}
                    description={cardContent.description}
                    href={cardContent.href}
                />
            )}
        </Stack>
    </>
};

export default Noticias;