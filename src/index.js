var vetor_expressao = [];

const painel = document.querySelector('.result');

const botoes = document.querySelectorAll('.btn_num');

const btn_clear = document.querySelector('.btn_clear');

const operats = document.querySelectorAll('.btn_operat'); 


function resolverPrioridades(vetor){

var total_prioridades = vetor.length;


    for(var i = 0; i < total_prioridades; i++){

        console.log(`Resolver prioridade de local${vetor[i]}`);

        if(vetor_expressao[vetor[i]].valor === '*'){

            //COMEÇAR AQUI O DESENVOLVIMENTO BRUTO MSM 
            vetor_expressao[vetor[i] - 1].valor = vetor_expressao[vetor[i] - 1].valor * vetor_expressao[vetor[i] + 1].valor;
            console.log(vetor_expressao[vetor[i] - 1]);

            vetor_expressao.splice(vetor[i], 2);

            redenrizar();

        }



    }


}


function error(){
    vetor_expressao.splice(0, vetor_expressao.length);

    painel.innerHTML = '';

    vetor_expressao.push({ valor: 'error', tipo: 'numero'});

    painel.innerHTML = vetor_expressao[0].valor;
}




function redenrizar(){
    painel.innerHTML = '';

var undefineds = 0;




    for(var i = 0; i < vetor_expressao.length; i++){
        const {valor} = vetor_expressao[i];

        var text = document.createTextNode(valor);
        painel.appendChild(text);

        if(vetor_expressao[i].valor === undefined)
        {
            undefineds++;
        }

    }

    if(undefineds > 0){

        error();

    }


}


function addPainel(valor){
    vetor_expressao.push(valor);
    redenrizar();
}


function resolverPainel(){

var contador_de_operacoes = [];
var contador_de_prioridades = [];

    for(var i = 0; i < vetor_expressao.length; i++){

        if(vetor_expressao[i].tipo == 'operador' && (vetor_expressao[i].valor == '+' || vetor_expressao[i].valor == '-' ) ){
            contador_de_operacoes.push(i);
        }
    }
    

    for(i = 0; i < vetor_expressao.length; i++){

        if(vetor_expressao[i].tipo == 'operador' && (vetor_expressao[i].valor == '*' || vetor_expressao[i].valor == '/')){
            contador_de_prioridades.push(i);
        }

    }


    resolverPrioridades(contador_de_prioridades);
    
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

                const valor = parseInt(botoes[i].innerHTML, 10);

                botoes[i].addEventListener('click', () => {

                    vetor_expressao.push(
                        {
                        valor: valor,
                        tipo: 'numero',
                        }
                    );


                redenrizar();

                }
                ); 

            setarAtributosOperats();
        }

}


setarAtributos(); 


btn_clear.onclick = () => {

    vetor_expressao.splice(0, vetor_expressao.length);
    redenrizar();
    console.log(vetor_expressao);
}

