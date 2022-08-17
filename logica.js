const inputMensagem = document.querySelector("#mensagem");
const inputResultado = document.querySelector("#resultado");

const btnCodificar = document.querySelector("#codificar");
const btnDecodificar = document.querySelector("#decodificar");
const btnCopiar = document.querySelector("#copiar");

const listaErros = document.querySelector(".lista-erros");


$(".botao-div").click(function() {
    $("#div-alterar").hide("fast");
});

function validarMensagem() {
    // Borrar erros previos
    let errosPrevios = listaErros.querySelectorAll (".error");
    for (let err of errosPrevios) {
        listaErros.removeChild(err)
    }

    var mensagem = inputMensagem.value;
    let letrasValidas = "abcdefghijklmnopqrstuvwxyz ";
    let mensagemError = document.createDocumentFragment();
    for(let letra of mensagem) {
        if (!letrasValidas.includes(letra)) {
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent = `A letra ${letra} não é válida`;
            mensagemError.appendChild(p);
        }
    }
    listaErros.appendChild(mensagemError);
    if (mensagemError.children.length === 0) {
        return true;
    }
    return false;
}


function codificar () {
    if (!validarMensagem ()) return;
    var mensagem = inputMensagem.value;
    var mensagemCodificar = mensagem
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('o', 'ober')
    .replaceAll('a', 'ai')
    .replaceAll('u', 'ufat');
    inputResultado.value = mensagemCodificar;
}

function decodificar () {
    if (!validarMensagem ()) return;
    var mensagemCodificar = inputMensagem.value;
    var mensagem = mensagemCodificar
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ai', 'a')
    .replaceAll('ufat', 'u');

    inputResultado.value = mensagem;
}

function copiar () {
    var mensagemCodificar = inputResultado.value;
    navigator.clipboard.writeText (mensagemCodificar);
    inputMensagem.value = '';
    inputMensagem.focus();

}


btnCodificar.onclick = codificar;

btnDecodificar.onclick = decodificar;

btnCopiar.onclick = copiar;