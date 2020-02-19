var vetor_expressao = [];

const painel = document.querySelector('.result');

const botoes = document.querySelectorAll('.btn_num');

const btn_clear = document.querySelector('.btn_clear');

const operats = document.querySelectorAll('.btn_operat'); 


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

var vetor_de_posicoes = [];

    for(let i = 0; i < vetor_expressao.lenght; i++){
        var {tipo, valor} = vetor_expressao[i];

            if(tipo == 'operador'){
                if(valor === '*' || valor === '/'){

                    vetor_de_posicoes.push(i);

                    console.log(`Mult or div: ${i}`);
                }
                if(valor === '+' || valor === '-'){

                    vetor_de_posicoes.push(i);
                    
                    console.log(`Sum or Sub: ${i}`);

                }
            }
    }

    console.log(vetor_de_posicoes);
}



function setarAtributosOperats(){
    for(var i = 0; i < operats.length; i++){
        const valor = operats[i].innerHTML;
        

        if(valor != '='){
            operats[i].addEventListener('click', () => {

                if(vetor_expressao.length > 0)
                {
                var {tipo} = vetor_expressao[vetor_expressao.length - 1];
                }
            
                if(vetor_expressao.length !== 0 && tipo !== 'operador')
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
            operats[i].addEventListener('click', () => {
                resolverPainel();
            });
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

    setarAtributosOperats();

}


setarAtributos(); 


btn_clear.onclick = () =>{

    vetor_expressao.splice(0, vetor_expressao.length);
    redenrizar();
}
