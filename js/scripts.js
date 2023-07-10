const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect= document.querySelector("#job");
const messageTextarea = document.querySelector("#message");


//console.log(form, nameInput);


form.addEventListener("submit", (event) => {

    event.preventDefault();
    // verificação do nome
    if(nameInput.value === ""){
        alert("Nome nao está preenchido, preencha o seu nome por favor");
        return;
    }

    // verifica o email e se é valido o email
    if(emailInput.value === "" || !isEmailIsTrue(emailInput.value)){
        alert("Email nao está preenchido certo, preencha o seu email corretamente por favor");
        return;
    }
    // verufucar o numero de digitos na senha e se esta preenchida
    if(!validadePassword(passwordInput.value, 8)) {
        alert("A senha deverá ter no minimo 8 digitos.");
        return;
    }

    // verificar se a situação foi selecionada
    if(jobSelect.value === ""){
        alert("Selecione SIM ou Não");
        return;
    }
    // mensagem verificada
    if(messageTextarea.value === ""){
        alert("Por favor, digite algo na caixa de texto de mensagem")
        return;
    }
    // se tudo estiver preenchido
    form.submit();
});

// funcão que valida o email

function isEmailIsTrue(email){

    const emailV = new RegExp(
        //usuario123@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailV.test(email)){
        return true;
    }

    return false;
}

// validaar senha
function validadePassword(password, minL){
    if(password.lenght >= minL) {
        return true
    }
    return false
}
