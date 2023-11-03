// Carne: 400g por pessoa + 6h (650g)
// Refrigerante: 1000ml + 6h (1500ml)
// Crianças valem por metade (0,5)

var iptAdult = document.getElementById("adult")
var iptChild = document.getElementById("child")
var iptDuration = document.getElementById("duration")
var resultado = document.getElementById("calculo")
function calcular(){
    var adult = iptAdult.value
    var child = iptChild.value
    var duration = iptDuration.value
    var qtdCarne = adult * carnePP(duration) + child * (carnePP(duration)/2)
    var qtdRefri = adult * refriPP(duration) + child * (refriPP(duration)/2)
    resultado.innerHTML = `<p>${qtdCarne/1000}KG de Carne</p>`
    resultado.innerHTML += `<p>${qtdRefri/1000}L de Refrigerante</p>`
}
function carnePP(duracao){
    if(duracao>=6){
        return 650
    }
    else{
        return 400
    }
}
function refriPP(duracao){
    if(duracao>=6){
        return 1500
    }
    else{
        return 1000
    }
}