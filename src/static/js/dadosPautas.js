const MensagemService = require("../../services/MensagemService")

const msg = MensagemService.obterMensagem;

const dadosPautas = [
    {
        title: msg('pautas.title.turnoIntegralEM'),
        description: msg('pautas.description.turnoIntegralEM')
    },
    {
        title: msg('pautas.title.estudoMaes'),
        description: msg('pautas.description.estudoMaes')
    },
    {
        title: msg('pautas.title.educacaoTech'),
        description: msg('pautas.description.educacaoTech')
    },
    {
        title: msg('pautas.title.educacaoSuperiorInclusiva'),
        description: msg('pautas.description.educacaoSuperiorInclusiva')
    },
    {
        title: msg('pautas.title.educacaoEMInclusiva'),
        description: msg('pautas.description.educacaoEMInclusiva')
    }
];

export default dadosPautas;