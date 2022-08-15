import ProjetoPlanetarioMoradoresRua from '../images/projetoPlanetarioMoradoresRua.jpg';
import BibliotecaEcioSalles from '../images/bibliotecaEcioSalles.jpeg';
import PassaporteCultural from '../images/passaporteCultural.jpg';
import TercaGratuita from '../images/tercaGratuita.webp';
import MensagemService from '../../services/MensagemService';

const msg = MensagemService.obterMensagem;

const conteudoCardsDestaques = [
    {
        title: msg('home.destaques.cards.title.bibliotecaEcioSalles'),
        description: msg('home.destaques.cards.content.bibliotecaEcioSalles'),
        image: BibliotecaEcioSalles,
        href: 'https://prefeitura.rio/cultura/biblioteca-%e2%80%8b%e2%80%8becio-salles%e2%80%8b-espaco-inaugurado-no-%e2%80%8bplanetario-da-gavea%e2%80%8b-ganha-nome-de-criador-da-flup%e2%80%8b%e2%80%8b/'
    },
    {
        title: msg('home.destaques.cards.title.projetoPlanetarioMoradoresRua'),
        description: msg('home.destaques.cards.content.projetoPlanetarioMoradoresRua'),
        image: ProjetoPlanetarioMoradoresRua,
        href: 'https://g1.globo.com/rj/rio-de-janeiro/noticia/2021/08/28/alcancando-as-estrelas-projeto-promove-visita-de-pessoas-em-situacao-de-rua-ao-planetario-do-rio.ghtml'
    },
    {
        title: msg('home.destaques.cards.title.passaporteCultural'),
        description: msg('home.destaques.cards.content.passaporteCultural'),
        image: PassaporteCultural,
        href: 'https://revistamuseu.com.br/site/br/o-escriba/14457-14-06-2022-rj-passaporte-cultural-completa-um-ano-de-democratizacao-do-acesso-a-cultura.html?iccaldate=2036-06-1#:~:text=RIO%20DE%20JANEIRO%2C%20Rio%20de%20Janeiro%20-%20Programa,mil%20atendimentos%20durante%20o%20primeiro%20ano%20de%20funcionamento.'
    },
    {
        title: msg('home.destaques.cards.title.tercaGratuitaPlanetario'),
        description: msg('home.destaques.cards.content.tercaGratuitaPlanetario'),
        image: TercaGratuita,
        href: 'https://vejario.abril.com.br/programe-se/planetario-sessoes-gratuitas-tercas/'
    }
];

export default conteudoCardsDestaques;