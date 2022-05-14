let nota1 = parseInt(prompt('Digite a primeira nota: '))
let nota2 = parseInt(prompt('Digite a segunda nota: '))
let sum = (nota1 + nota2) /2
if(sum <= 10){
    console.log('Estude um pouco mais')
}else{
    console.log('Parabéns.')
}
console.log(sum)