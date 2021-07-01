// Essa página contém todos os codigos da aula de introdução a programação para internet
// com javascript da Digital Inovation One, por github.com/jobsguimaraes










function clicou (){
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar</b>" ;
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar (){
    //window.open("https://www.facebook.com/jorbson.guimaraes/");
} 
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b> Obrigado por passar o mouse </b>";
    //alert ("trocar texto");
    elemento.innerHTML = "obrigado por passar o mouse";
}
function voltar(elemento){
 //   document.getElementById("mousemove").innerHTML = "<b> Tudo passa, até a uva passa</b>";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}
function funcaochange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1, n2){            //validador de idade
    return n1 + n2;
}
function validaIdade (idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
return validar;
}


var idade = prompt ("Qual a sua idade");
console.log(validaIdade(idade));

/*alert(soma(5,10));

/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5,10));
*/

/*
function soma(n1, n2){
    return n1 + n2;
}
function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5,10));
alert (setReplace ("vai japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d);
*/

/* var count;
for (count=0; count <= 5; count++){
alert(count);
} */

/* var count = 5;
while (count < 5){
    console.log(count);
    count++
} */

/*
var idade = prompt ("Qual a sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/
