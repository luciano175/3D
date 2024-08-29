const caixaPrincipal = document.querySelector(".caixa-principal");
    
    const caixaPerguntas = document.querySelector(".caixa-perguntas”);
    
    const caixaAlternativas = document.querySelector(".caixa-alternativas”);
    
    const caixaResultado = document.querySelector(".caixa-resultado”);
    
    const textoResultado = document.querySelector(".texto-resultado”);
    
    const perguntas = [
    {
    enunciado: "Pergunta 1”,
    alternativas: ["Alternativa 1”, “Alternativa 2”],
    },
    {
    enunciado: "Pergunta 2”,
    alternativas: ["Alternativa 1”, “Alternativa 2”],
    },
    {
    enunciado:
    alternativas:["Alternativa1", "Alternativa2"],
    }
    ];
    let atual =0;
    let )  {
            enunciado:
            alternativas: [
        {
            texto:
            afirmação:
        },
        {
            texto:
            afirmação:
        }
     ]
   },
       function mostraAlternativa () {
        for (const alternativa of perguntaAtual.alternativas)
      }
       {
            const botaoAlternativas = document.
    createElement("butom");
              botaoAlternativas.textContent = alternativa;
              caixaAlternativas.appendChild(botaoAlternativas);
       }
    }
          botaoAlternativas.textContent = alternativa;
          botaoAlternativas.textContent = alternativa.texto;
          botaoAlternativas.addEventListener("click");
          botaoAlternativas.addEventListener("click", function ()  {

             });


              let atual = 0;
        function mostraPergunta () {
            perguntaAtual = peruntas [atual];
        botaoAlternativas,addEventListener("click", function () {
                       atual++;
            mostraPergunta();

        });
    }

           function mostraAlternativa () {
             for(const alternativa of perguntaAtual.alternativas)  {
                const botaoAlternativas = document.
            createElement("buton");
                botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas.addEventListener("click", function () {
                    atual++;
                    mostraPergunta();
                 });
                 caixaAlternativas.appendChild(botaoAlternativas);
             }

           }