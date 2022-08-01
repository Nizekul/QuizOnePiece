// variaveis de controle do jogo
var perguntasFeitas = [];

// perguntas do jogo
const perguntas = [
    //  PERGUNTA 0
    {   pergunta: "Qual foi o primeiro ataque de akuma no mi do luffy?",
        respostas: ["Gomu gomu no bazooka", "Gomu gomu no pistol", "Gomu Gomu", "Gomu Gomu no mi"],
        correta: "resp1"
    },
    //  PERGUNTA 1
    {   pergunta: "Qual a ordem certa dos membros que entraram pro bando da primeira temp?",
        respostas: ["ZORO, USOPP, SANJI E NAMI", "ZORO, NAMI, USOPP E SANJI", "NAMI, USOPP, ZORO E SANJI", "ZORO, USOPP, NAMI E SANJI"],
        correta: "resp3"
    },
    //  PERGUNTA 2
    {   pergunta: "Qual pirata destruiu a ilha de drum?",
        respostas: ["Shanks", "Buggy", "Barba Negra", "Mihawk"],
        correta: "resp2"
    },
    //  PERGUNTA 3
    {   pergunta: "Qual o irmão de sangue do luffy?",
        respostas: ["Sabo", "Corazon", "Ace", "Nenhum"],
        correta: "resp3"
    },
    //  PERGUNTA 4
    {   pergunta: "Qual o cargo de Monkey D. Garp na Marinha?",
        respostas: ["Almirante", "Vice-Almirante", "Almirante de Frota", "Capitão"],
        correta: "resp1"
    },
    //  PERGUNTA 5
    {   pergunta: "Qual desses era um pirata de Gol D. Roger?",
        respostas: ["Luffy", "Zoro", "Aokiji", "Rayleigh"],
        correta: "resp3"
    },
    //  PERGUNTA 6
    {   pergunta: "Qual o maior obstáculo dos usuários de uma Akuma no Mi?",
        respostas: ["Eles não podem falar qual é o seu poder", "Eles não podem falar", "Eles não podem nadar", "Não há obstáculos para eles"],
        correta: "resp2"
    }
]
var qtdPerguntas = perguntas.length -1;
gerarPergunta(qtdPerguntas)

function gerarPergunta(todasPerguntas){
    // Gerar uma pergunta aleatoria
    let aleatorio = (Math.random() * todasPerguntas).toFixed()
    // Converter para numero
    aleatorio = Number(aleatorio)
    // verificar se a pergunta ja foi feita
    if(!perguntasFeitas.includes(aleatorio)){
        // Colocar como pergunta feita
        perguntas.push(aleatorio)
        //preencher o html com os dados da questao sorteada
        var p_selecionada = perguntas[aleatorio].pergunta
        // Colocando pergunta no html
        $("#pergunta").html(p_selecionada);
        // Colocando respostas
        for(var i=0; i<4;i++){
            $("#resp"+i).html(perguntas[aleatorio].respostas[i])
        }
    }

}