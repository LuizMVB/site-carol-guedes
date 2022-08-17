const data = {
    // PADRÃO
    'padrao.label.nomeProjeto'                  : 'Carol Guedes',
    'padrao.cliqueAqui'                         : 'clique aqui',
    'padrao.vejaMais'                           : 'veja mais',
    'padrao.pautas'                             : 'Pautas',
    'padrao.enviar'                             : 'Enviar',
    'padrao.titulo'                             : 'Título',
    'padrao.entreSeuTituloAqui'                 : 'Digite o título do seu e-mail aqui',
    'padrao.corpo'                              : 'Corpo do e-mail',
    'padrao.corpo.defaultValue'                 : 'Olá, Carol Guedes! Eu queria dizer que...',
    'padrao.label.faleComigo'                   : 'Fale Comigo',

    // NAVBAR
    'navbar.link.biografia'                      : 'Biografia',
    'navbar.link.propostas'                      : 'Propostas',

    // HOME
    'home.label.subtitle'                                           : 'Por uma educação de qualidade hoje que construa pontes para o Rio de amanhã',
    'home.label.subtitle1'                                          : 'Caroline Guedes é uma mulher preta, suburbana, filha de camelôs e doutora em história pela Universidade Federal Fluminense. Caroline  atuou como professora de diversos pré-vestibulares sociais. Foi gestora de eventos e projetos sociais na Fundação Planetário e democratizou esse equipamento cultural. No ano de 2022 Caroline foi assumir um novo desafio coordenando o projeto "Livres para Estudar" que visa distribuir absorventes para as estudantes do 4º ano à Educação de Jovens e Adultos da Secretaria Municipal de Educação.',
    'home.ajudarNaCampanha'                                         : 'Deseja ajudar na campanha? Clique aqui',
    'home.destaques.cards.title.passaporteCultural'                 : 'Passaporte Cultural completa um ano de democratização do acesso à cultura',
    'home.destaques.cards.title.bibliotecaEcioSalles'               : 'Biblioteca ​​Ecio Salles​: espaço inaugurado no ​Planetário da Gávea​ ganha nome de criador da Flup',
    'home.destaques.cards.title.projetoPlanetarioMoradoresRua'      : '\'Alcançando as Estrelas\': projeto leva pessoas em situação de rua ao Planetário do Rio',
    'home.destaques.cards.content.passaporteCultural'               : 'Recebeu a população carente dos mais diversos municípios cariocas no Planetário, através de uma parceria com a Secretaria de Cultura e Economia Criativa do Estado do Rio de Janeiro (SECEC)',
    'home.destaques.cards.content.bibliotecaEcioSalles'               : 'Colaborou com o projeto e no processo de execução da biblioteca Écio Salles, na Fundação Planetário em parceria com a Secretaria de Cultura do Rio de Janeiro. Sendo essa uma biblioteca para pensar e integrar a cidade',
    'home.destaques.cards.content.projetoPlanetarioMoradoresRua'    : 'Recebeu população de rua no Planetário às sextas-feiras a partir da implantação do projeto “Alcançando as Estrelas” em parceria com a Secretaria Municipal de Assistência Social.',
    'home.label.destaques'                                          : 'Destaques',
    'home.destaques.cards.title.tercaGratuitaPlanetario'            : 'Planetário reabre com sessões gratuitas às terças',
    'home.destaques.cards.content.tercaGratuitaPlanetario'          : 'Criou a terça gratuita para gerar acesso a toda população carioca à astronomia, ciências afins e cultura',

    // PAUTAS
    'pautas.title.turnoIntegralEM'                  : 'Por uma educação de turno integral para o ensino médio',
    'pautas.description.turnoIntegralEM'            : '◻ Com a inclusão de cursos profissionalizantes no Ensino de Jovens e Adultos; \n◻ Com escolas que atendam os alunos em tempo integral com atividades complementares: esportes, música, dança, línguas e reforço escolar; \n◻ Com o aumento de unidades de escolas técnicas por todo Estado do Rio de Janeiro (Faetec).',
    'pautas.title.estudoMaes'                       : 'Pelo direito de estudar das mulheres mães',
    'pautas.description.estudoMaes'                 : '◻ Salas de acolhimento, nas escolas que atendam jovens e adultos, para cuidar dos filhos das estudantes durante o período em que elas estiverem em aulas; \n◻ Com a criação de creches universitárias que acolham os filhos das estudantes durante as aulas.',
    'pautas.title.educacaoTech'                     : 'Por uma educação inovadora e tecnológica que gere emprego e renda',
    'pautas.description.educacaoTech'               : '◻ Com a ampliação e atualização dos cursos profissionalizantes para qualificar e inserir nossos jovens no mercado de trabalho.',
    'pautas.title.educacaoSuperiorInclusiva'        : 'Por uma educação superior inclusiva ',
    'pautas.description.educacaoSuperiorInclusiva'  : '◻ Com um programa de reforço e suporte estudantil que permita a adaptação dos alunos cotistas à universidade; \n◻ Com acompanhamento médico universitário e assistência social para alunos cotistas e pessoas com deficiência; \n◻ Incentivo fiscal para empresas que contratem universitários cotistas em cargas horárias flexíveis.',
    'pautas.title.educacaoEMInclusiva'              : 'Por uma educação inclusiva no Ensino Médio',
    'pautas.description.educacaoEMInclusiva'        : '◻ Com um programa em que as universidades forneçam estagiários para acompanhar alunos com deficiência no nível médio.'
};

const obterMensagem = (key, ...args) => {
    let msg = data[key];
    if(!data || !msg) {
        return key;
    } else if (args.length === 0){
        return msg;
    } else {
        return formatar(msg, args);
    }
};

const formatar = (msg, args) => {
    let argsIndex = 0;
    for (let index = 0; index < msg.length; index++) {
        if(msg[index] === '{' && msg[index+2] === '}' && msg[index+1] === argsIndex.toString()) {
            msg = inserir(msg, index, args[argsIndex]);
            argsIndex++;
        }
    }
    return msg;
};

const inserir = (str, index, value) => {
    return str.substr(0, index) + value + str.substr(index+3);
};


module.exports = {
    obterMensagem: obterMensagem
}