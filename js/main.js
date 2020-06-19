function clicou(){
    //alert("Obrigado por clicar")
    //console.log(document.getElementById("agradecimento"));
   // document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
   document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");//Abre em outra janela
    //window.location.href = "https://digitalinnovation.one/";//Abre na mesma janela
}

function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    //alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1,n2){
    return n1+n2;
}
*/
/*
function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/
//console.log(soma(5, 10));


/*var d = new Date();
//alert(d);
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getMinutes());
console.log(d.getHours());
console.log(d.getTime());*/

/*var count;
for(count = 0; count <= 5;count++){
    //alert(count);
    console.log(count);

};*/


/*var count = 0;
while(count < 5){
    console.log(count);
    //alert(count);
    count = count + 1;
};*/

/*var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
    console.log("maior de idade");
}else{
    alert("menor de idade");
    console.log("menor de idade");
};*/

/*var frutas = [{nome: "maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas.nome);
console.log(frutas[1].nome);
*/

/*var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta)
console.log(fruta.nome);
*/

/*var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/
//var nome ="David Santos";
//var idade = 40;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem "+ idade + " anos");
//alert(idade + idade2)
//console.log(nome + " "+idade);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"))
//console.log(frase.toUpperCase())
//console.log(frase.toLowerCase())

