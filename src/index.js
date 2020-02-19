var vetor_expressao = [];

const painel = document.querySelector('.result');

const botoes = document.querySelectorAll('.btn_num');

const btn_clear = document.querySelector('.btn_clear');

const operats = document.querySelectorAll('.btn_operat'); 

console.log(operats);
console.log(botoes);

function resolverPainel(){
    
}


function redenrizar(){
    painel.innerHTML = '';

    for(var i = 0; i < vetor_expressao.length; i++){
        const {valor} = vetor_expressao[i];

        var text = document.createTextNode(valor);
        painel.appendChild(text);
    }
}


function addPainel(valor){
    vetor_expressao.push(valor);
    redenrizar();
}

function resolverPainel(){
    
    for(var i = 0; i < vetor_expressao.length; i++){

        if(vetor_expressao[i] === '+'){

        

        }

        else if(vetor_expressao[i] === '-'){



        }


    }

}



function setarAtributosOperats(){
    for(var i = 0; i < operats.length; i++){
        const valor = operats[i].innerHTML;
        

        if(valor != '='){
            operats[i].addEventListener('click', () => {
            var {tipo} = vetor_expressao[vetor_expressao.length - 1];
                if(tipo !== 'operador')
                {
                    vetor_expressao.push({
                        valor: valor,
                        tipo: 'operador',
                    });
                    redenrizar();
                }
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

        botoes[i].addEventListener('click', () => {
            vetor_expressao.push({
                valor: valor,
                tipo: 'numero',
            });
            redenrizar();
        }); 
    }

    setarAtriconst     console.log('teste');butosOperats();

}


setarAtributos(); 


btn_clear.onclick = () =>{

    vetor_expressao.splice(0, vetor_expressao.length);
    redenrizar();
}
