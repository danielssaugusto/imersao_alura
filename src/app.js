document.addEventListener("DOMContentLoaded", function() {
    function pesquisar() {
        let section = document.getElementById("resultados-pesquisa");
        let pesquisaInput = document.getElementById("pesquisa").value.toLowerCase();

        if (pesquisaInput.trim() === '') {
            section.innerHTML = "Digite um termo para pesquisar";
            return;
        }

        let resultados = "";

        for (const dado of dados) {
            if (dado.titulo.toLowerCase().includes(pesquisaInput) || dado.descricao.toLowerCase().includes(pesquisaInput)) {
                resultados = `
                    <div class="item-resultado">
                        <h2>${dado.titulo}</h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais Informações</a>
                    </div>
                `;
            }
        }
        
        section.innerHTML = resultados || "Nenhum resultado encontrado.";
    }

    document.getElementById("pesquisa").addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            pesquisar();
        } 
    });
});


const app = {
    dados: dados, // Certifique-se de que 'dados' está definido no arquivo ../src/dados.js
    perguntas: perguntas, // Certifique-se de que 'perguntas' está definido no arquivo ../src/dados.js
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
            alert("Resposta correta!");
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

