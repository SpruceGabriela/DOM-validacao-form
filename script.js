//retira função da letra "p"
//
// let email = document.querySelector("input[type=email");
// email.onkeydown = function(evento){
//     if(evento.key === "p"){
//         evento.preventDefault();
//     }
// }



let formulario = document.querySelector('form');
let emailInputs = document.querySelectorAll('input[type=email]');
let senha = document.querySelector('input[type=password]');
let planos = document.querySelectorAll('input[name=plano]')

formulario.onsubmit = function(evento){
    evento.preventDefault();
    console.log(evento);
    let inputOK = false;

    for(let input of planos){
        if(input.checked){
            inputOK = true;
        }
    }

    if((emailInputs[0].value !== emailInputs[1].value) || emailInputs[0].value == ""){
        alert('Digite emails iguais');
    }
    else if(senha.value.length<8){
        alert('sua senha precisa ter 8 caracteres');
        //adicionar expressão regular para validação de caractere
    }
    else if(!inputOK){
        alert('selecione um plano');
    }
    else{
        //'000.000.000-00'.replace(".", "").replace(".", "").replace("-", "");
        formulario.submit();
    }
}
