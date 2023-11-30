alert("Hello world!")

let num1 = 4
let num2 = 5

alert( num1 + num2)

let isNumber = "5"

if (typeof isNumber == "number"){
    alert(`${isNumber} é um número.`)
}else {
    alert(`${isNumber} não é um número.`)
}

if ((typeof isNumber) == "string"){
    alert(`${isNumber} É uma string.`)
}else {
    alert(`${isNumber} Não é uma string.`)
}

if ((typeof isNumber) == "boolean"){
    alert(`${isNumber} É um boleano.`)
}else {
    alert(`${isNumber} Não é um boleano.`)
}

num1 = Number(prompt("Digite um numero: "))
num2 = Number(prompt("Digite outro numero: "))

let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2

alert("Subtração = " + sub)
alert("Multiplicação = " + mult)
alert("Divisão = " + div)

let isEvenNumber = Number(prompt('Digite um numero: '))

if ( (isEvenNumber % 2) === 0 ){
    alert("Número é par")
}else {
    alert("Número é impar")
}







