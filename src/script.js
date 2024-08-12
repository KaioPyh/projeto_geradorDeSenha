let slider=document.getElementById("slider");
let button=document.getElementById("button");
let tamanhoSenha=document.getElementById("valor");
let senha=document.getElementById("password");
let containerSenha=document.querySelector("#container_password");

let caracteres= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha= "";

tamanhoSenha.innerHTML=slider.value;

slider.oninput = function(){
    tamanhoSenha.innerHTML = this.value;
};

function geradorDeSenha(){
    
    let pass = "";

    for(let i = 0, n = caracteres.length; i < slider.value; ++i){
        pass += caracteres.charAt(Math.floor(Math.random() * n));
    }

    containerSenha.classList.remove("hide");
    senha.innerHTML= pass;
    novaSenha = pass;
};

function copiarSenha(){
    alert("Senha copiada");
    navigator.clipboard.writeText(novaSenha);
};