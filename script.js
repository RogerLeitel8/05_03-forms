let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confEmail = document.querySelector("#confEmail");
let senha = document.querySelector("#senha");
let botao = document.querySelector("button");
let opcao = document.querySelector("select");
let texto = document.querySelector("p");


botao.onclick = function(){
    if(email.value == confEmail.value){
        localStorage.setItem("nome",nome.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("confEmail",confEmail.value);
        localStorage.setItem("senha",senha.value);
        localStorage.setItem("Sexo",opcao.value);
        texto.innerHTML = "Cadastrado com Sucesso";
    }else{
        alert("Os emails não combinam");
    }
}

