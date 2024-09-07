// Gerando uma lista de objetos
const dados = [
    {
        titulo: "Clark Kent",
        descricao: 'Ao longo da minha vida, busquei um lugar aonde pertenço. A Krypton, meu planeta natal, foi destruída. A Terra, embora seja meu lar adotivo, nunca me senti completamente parte dela. A solidão é uma companheira constante em minha jornada.',
        link: "https://www.imdb.com/title/tt0770828/characters/nm0147147?ref_=tt_cl_c_1",
        tags: "kal kalel kal-el escoteiro superman super super-homem herói heroi"
    },

    {
        titulo: "Lara Lor-Van",
        descricao: 'A maternidade é um instinto universal, independentemente da origem. Sentir o coração de meu filho batendo dentro de mim foi uma experiência indescritível. A dor da separação foi quase insuportável, mas a esperança de um futuro melhor para ele me fortalecia.',
        link: "https://www.imdb.com/title/tt0770828/characters/nm0957909?ref_=tt_cl_c_11",
        tags: "cientista mãe mae"
    },

    {
        titulo: "Jor-El",
        descricao: 'Ao olhar para o céu estrelado, imaginava as infinitas possibilidades que o futuro reservava para meu filho. Sonhava com um dia em que Kal-El se tornaria um símbolo de esperança para toda a humanidade, um farol em meio à escuridão.',
        link: "https://www.imdb.com/title/tt0770828/characters/nm0000128?ref_=tt_cl_c_5",
        tags: "cientista pesquisador explorador pai "
    },
];

const perguntas = [
    {
        pergunta: "Qual o nome do planeta natal do Superman?",
        opcoes: ["Krypton", "Xandar", "Asgard"],
        resposta: "Krypton"
    },
    {
        pergunta: "Com o que as naves kryptonianas são acionadas?",
        opcoes: ["Disco Octagonal", "Chave de comando", "Comando de voz"],
        resposta: "Chave de comando"
    },
    {
        pergunta: "Qual o objetivo de Zod ao chegar à Terra?",
        opcoes: ["Dominar o planeta e transformá-lo em um novo Krypton", "Destruir a Terra para vingar a queda de Krypton", "Encontrar a Fortaleza da Solidão"],
        resposta: "Dominar o planeta e transformá-lo em um novo Krypton"
    },
    {
        pergunta: 'Quem dirigiu "O Homem de Aço"?',
        opcoes: ["Christopher Nolan", "Joss Whedon", "Zack Snyder"],
        resposta: "Zack Snyder"
    },
    {
        pergunta: "Qual o nome do ator que interpreta o protagonista?",
        opcoes: ["Ben Affleck", "Henry Cavill", "Tom Welling"],
        resposta: "Henry Cavill"
    },
    {
        pergunta: "Qual o motivo de Jor-El enviar seu filho, Kal-El, para a Terra?",
        opcoes: ["Para escapar de uma guerra civil em Krypton", "Para salvar a humanidade de uma invasão alienígena", "Para garantir a sobrevivência da espécie kryptoniana"],
        resposta: "Para garantir a sobrevivência da espécie kryptoniana"
    },
    {
        pergunta: "Onde Clark Kent encontra a Fortaleza da Solidão pela primeira vez?",
        opcoes: ["No Polo Sul", "No Himalaia", "No Ártico"],
        resposta: "No Ártico"
    },
    {
        pergunta: "Qual evento desencadeia a chegada de Zod e seus seguidores à Terra?",
        opcoes: ["A ativação de uma nave kryptoniana escondida na Terra", "A descoberta da localização da Fortaleza da Solidão", "Um sinal de socorro enviado por Jor-El"],
        resposta: "A ativação de uma nave kryptoniana escondida na Terra"
    },
    {
        pergunta: "Qual a principal razão pela qual Superman decide se revelar ao mundo?",
        opcoes: ["Para provar sua superioridade aos outros super-heróis", "Para encontrar seu lugar no mundo e fazer a diferença", "Para proteger a humanidade de uma ameaça maior"],
        resposta: "Para proteger a humanidade de uma ameaça maior"
    },
    {
        pergunta: 'Qual o significado do símbolo "S" no peito do uniforme do Superman?',
        opcoes: ['Significa "esperança" em kryptoniano', "Representa a casa de El, a última casa de Krypton.", "É apenas um símbolo aleatório escolhido por Jor-El."],
        resposta: 'Significa "esperança" em kryptoniano'
    },
];