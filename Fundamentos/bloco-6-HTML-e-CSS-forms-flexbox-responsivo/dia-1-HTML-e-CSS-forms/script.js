function addState(){
    let estado = document.getElementById("estado");
    let estados = ["Ácre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];
    let siglas = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
    for(let i = 0; i < estados.length; i += 1){
        let nomeEstado = document.createElement('option');
        nomeEstado.innerText = estados[i];
        nomeEstado.value = siglas[i];
        estado.appendChild(nomeEstado);
    }
}
function validateName(){
    const name = document.querySelector('[name=nome]');
    if(name.value.length > 40 || name.value.length === 0){
        alert("nome inválido");
    }
}

function prevDefault(event){
    event.preventDefault();
};

window.onload = function(){
    addState();

    const button = document.getElementById("submit");
    button.addEventListener('click', prevDefault);
    button.addEventListener('click', validateName);
    button.addEventListener('click', validEmail);
    

}

function validEmail(){
    let email = document.getElementById("email");

    if(!email.checkValidity()){
        alert("email inválido");
    }
}
