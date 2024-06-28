let nomeUsuario = "";
let elementoEx = document.querySelector("#nome-usuario");

while (nomeUsuario == "") {nomeUsuario = prompt("Qual é o seu nome?");}

if (nomeUsuário == null) {
    elementoEx.textContent = 'seja muito bem-vindo!!!';
} 
else {
    elementoEx.textContent = nomeUsuario;
}
