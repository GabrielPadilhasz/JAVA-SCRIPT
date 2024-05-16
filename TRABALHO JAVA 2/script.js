
let calculaSoma = document.querySelector("#calculaSoma");
let h1titulo = document.querySelector("#h1titulo");
let PNumero = document.querySelector("#PNumero");
let SNumero = document.querySelector("#SNumero");

function resultado(){
    let var1;
    let var2;
    var1=Number(PNumero.value);
    var2=Number(SNumero.value);

    h1titulo.textContent=var1-var2;

}
calculaSoma.onclick = function(){
    resultado()
}