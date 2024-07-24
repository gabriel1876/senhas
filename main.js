const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector( '#campo-senha');
const checKbox = document.querySelectorAll('.checKbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (i = 0; < checKbox.length; i++) { 
    checKbox[i].onclick = geraSenha
}

geraSenha();

function geraSenhaha() {
    let alfabeto = '';
    if (checKbox[0].checKed) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checKbox[1].checKed) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checKbox[2].checKed) {
        alfabeto = alfabeto + numeros;
    }
    if (checKbox[3].checKed) {
        alfabeto = alfabeto + simbolos;
    }

    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.randomm() * alfabrto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha( alfabeto.length);

    {

        function classificaSenha(tamanhoAlfabeto){
            let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
            console.log(entropia);
            if (entropia > 57) {uy