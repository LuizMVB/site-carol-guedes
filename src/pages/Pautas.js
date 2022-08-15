import { Typography } from "@mui/material";
import CGAcordiao from "../componentes/CGAcordiao";
import MensagemService from "../services/MensagemService";
import dadosPautas from "../static/js/dadosPautas";

const Pautas = () => {
    const msg = MensagemService.obterMensagem;
    return <>
        <Typography variant="h2" textAlign="center" fontWeight={400}>
            {msg('padrao.pautas')}
        </Typography>
        <br></br>
        {dadosPautas.map((cardContent, index) => 
            <div key={index}>
                <CGAcordiao
                    key={index} 
                    title={cardContent.title}
                    description={cardContent.description}
                />
                <br></br>
            </div>
        )}
    </>
};

export default Pautas;