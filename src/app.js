// Manipulando o DOM
document.addEventListener("DOMContentLoaded", function() {
    // Função para pesquisar uma informação na página
    function pesquisar() {
        let section = document.getElementById("resultados-pesquisa");
        let pesquisaInput = document.getElementById("pesquisa").value.toLowerCase();

        if (pesquisaInput.trim() === '') {
            section.innerHTML = "Digite um termo para pesquisar";
            return;
        }

        let resultados = "";

        for (const dado of dados) {
            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            tags = dado.tags.toLowerCase();

            if (titulo.includes(pesquisaInput) || descricao.includes(pesquisaInput) || tags.includes(pesquisaInput)) {
                resultados += `
                    <div class="item-resultado">
                        <h2>${dado.titulo}</h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais Informações</a>
                    </div>
                `;
            }
        }
        
        // Exibe na tag HTML o resultado ou a mensagem informando que não existe no banco de dados
        section.innerHTML = resultados || "<p>Nenhum resultado encontrado.</p>";
    }

    // Atribuindo a função "pesquisar()" no evento de clicar no botão
    document.getElementById("button-pesquisa").addEventListener('click', function() {
        `<div style="display: none;" class="imagem-apresentacao">`
        pesquisar();
    });
    
    // Atribuindo a função "pesquisar()" no evento de pressionar o "enter"
    document.getElementById("pesquisa").addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            pesquisar();
        } 
    });
});

// Página de Curiosidades
const app = {
    dados: dados, 
    perguntas: perguntas,
    pontuacao: 0,
    perguntaAtual: 0,
};

function quiz(app) {
    function exibirPergunta() {
        const pergunta = app.perguntas[app.perguntaAtual];
        const elementoPergunta = document.getElementById("pergunta");
        const elementoOpcoes = document.getElementById("opcoes");

        elementoPergunta.textContent = pergunta.pergunta;
        elementoOpcoes.innerHTML = "";

        pergunta.opcoes.forEach(opcao => {
            const botao = document.createElement("button");
            botao.textContent = opcao;
            botao.addEventListener("click", () => verificarResposta(opcao));
            elementoOpcoes.appendChild(botao);
        });
    }

    function verificarResposta(opcaoSelecionada) {
        const pergunta = app.perguntas[app.perguntaAtual];
        if (opcaoSelecionada === pergunta.resposta) {
            app.pontuacao++;
            alert("Resposta correta!")
        } else {
            alert("Resposta incorreta!");
        }

        app.perguntaAtual++;
        if (app.perguntaAtual < app.perguntas.length) {
            exibirPergunta();
        } else {
            mostrarResultado();
        }
    }

    function mostrarResultado() {
        const resultado = document.getElementById("resultado");
        resultado.textContent = `Você acertou ${app.pontuacao} de ${app.perguntas.length} perguntas!`;
    }

    exibirPergunta();
}

function toggleElement(id, show) {
    const element = document.getElementById(id);
    element.style.display = show ? 'block' : 'none';
}

document.getElementById("iniciar").addEventListener("click", () => {
    toggleElement("iniciar", false);
    toggleElement("quiz", true);
    quiz(app);
});

// Página de Galeria
