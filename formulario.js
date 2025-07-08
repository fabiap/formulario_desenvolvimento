const emailInput = document.querySelector("#email");
//quarySelector é para selecionar um elemento do html
//a # é porque é id, se fosse classe seria .

/*const emailInput2 = document.getElementById(email)
getElementById é para selecionar um elemento específico*/

const senhaInput = document.querySelector("#password");
const entrarBotao = document.querySelector("#form-login-entrar");
const form = document.querySelector("#form")
const erroS = document.querySelector("#erroS")
const erroE = document.querySelector("#erroE")

entrarBotao.addEventListener("click", (e) => {
    e.preventDefault();
    if (emailInput.value == ""){
        emailInput.style.borderColor = "red";
        erroE.style.display = "block";

        setTimeout(()=> {
            emailInput.style.borderColor="black";
            erroE.style.display="none";
        }, 5000);
        return;
    }

    if (senhaInput.value ==""){
        senhaInput.style.borderColor ="red";
        erroS.style.display = "block"; /*o "block" serve pra mostrar a mensagem de erro que o "none" esconde*/

        setTimeout( () =>{
            senhaInput.style.borderColor="black";
            erroS.style.display = "none";
        }, 5000);
        return;//nao envia
    }
    form.submit();//envia
});

/*estou adicionando um evento e ele dispara através de um click, 
sua função é anônima(por causa do =>), 
o "e" é uma variavel que recebe a funçao,
a funçao é prevenir que o usuario execute e ação(entrar sem preencher)*/

//set é para fazer algo em um milesimo de tempo; interval = repete; timeout = executa só uma vez