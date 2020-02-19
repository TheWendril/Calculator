var vetor_expressao = [];

const painel = document.querySelector('.result');

const botoes = document.querySelectorAll('.btn_num');

const operats = document.querySelectorAll('.btn_operat'); 

console.log(operats);
console.log(botoes);

function resolverPainel(){
    
}


function redenrizar(){
    painel.innerHTML = '';

    for(var i = 0; i < vetor_expressao.length; i++){
        var text = document.createTextNode(vetor_expressao[i]);
        painel.appendChild(text);
    }
}


function addPainel(valor){
    vetor_expressao.push(valor);
    redenrizar();
}

function resolverPainel(){
    console.log('continuar daqui');
}



function setarAtributosOperats(){
    for(var i = 0; i < operats.length; i++){
        const valor = operats[i].innerHTML;
        

        if(valor != '='){
            operats[i].addEventListener('click', () => {
                    vetor_expressao.push(valor);
                    redenrizar();
                });
            }

        if(valor == '='){
            operats[i].addEventListener('click', () => {resolverPainel()});
            }   
    }

}

function setarAtributos(){

    for(var i = 0; i < botoes.length; i++){

        const valor = botoes[i].innerHTML;

        botoes[i].setAttribute('onclick', 'addPainel(' + valor + ')'); 
    }

    setarAtributosOperats();

}


setarAtributos();