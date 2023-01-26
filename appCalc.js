const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const zero = document.querySelector("#zero")

const clear = document.querySelector("#clear")
const equals = document.querySelector("#eq")

const plus = document.querySelector("#plus")
const mult = document.querySelector("#mult")
const min = document.querySelector("#min")
const divis = document.querySelector("#divis")


const firstNumArea = document.querySelector("#firstNum");
const secondNumArea = document.querySelector("#secondNum");

const operArea = document.querySelector("#oper")
const equalStr = document.querySelector("#equalsStr")
const hone = document.querySelector("h1")

const history = document.querySelector("#history")


const calculus = {
    numOne: '',
    numTwo: '',
    whatToDo: null

}


const add = (x, y) => { return parseInt(x) + parseInt(y) }
const multiply = (x, y) => { return parseInt(x) * parseInt(y) }
const division = (x, y) => { return parseInt(x) / parseInt(y) }
const minus = (x, y) => { return parseInt(x) - parseInt(y) }






plus.addEventListener("click", () => {

    calculus.whatToDo = add;
    operArea.innerText = "+"
    console.log(calculus)

})

min.addEventListener("click", () => {

    calculus.whatToDo = minus;
    operArea.innerText = "-"
    console.log(calculus)


})

mult.addEventListener("click", () => {

    calculus.whatToDo = multiply;
    operArea.innerText = "*"
    console.log(calculus)


})

divis.addEventListener("click", () => {

    calculus.whatToDo = division;
    operArea.innerText = "/"
    console.log(calculus)


})


equals.addEventListener("click", () => {

    let x = calculus.whatToDo(calculus.numOne, calculus.numTwo)
    equalStr.innerText = `=${x}`
    const newLi = document.createElement("li");
    newLi.innerText = x;
    history.append(newLi)

})


clear.addEventListener("click", () => {

    secondNumArea.innerText = ''
    firstNumArea.innerText = ''
    equalStr.innerText = ''
    operArea.innerText = ''

    calculus.numOne = '',
        calculus.numTwo = '',
        calculus.whatToDo = null


})





one.addEventListener("click", () => {
    if (calculus.whatToDo === null) {


        calculus.numOne += '1';
        firstNumArea.innerText = calculus.numOne
    }
    else { calculus.numTwo += '1'; secondNumArea.innerText = calculus.numTwo }



})

two.addEventListener("click", () => {
    if (calculus.whatToDo === null) {

        calculus.numOne += '2';
        firstNumArea.innerText = calculus.numOne
    }
    else { calculus.numTwo += '2'; secondNumArea.innerText = calculus.numTwo }



})

three.addEventListener("click", () => {
    if (calculus.whatToDo === null) {

        calculus.numOne += '3';
        firstNumArea.innerText = calculus.numOne
    }
    else { calculus.numTwo += '3'; secondNumArea.innerText = calculus.numTwo }



})


four.addEventListener("click", () => {
    if (calculus.whatToDo === null) {

        calculus.numOne += '4';
        firstNumArea.innerText = calculus.numOne
    }
    else { calculus.numTwo += '4'; secondNumArea.innerText = calculus.numTwo }



})

five.addEventListener("click", () => {
    if (calculus.whatToDo === null) {

        calculus.numOne += '5';
        firstNumArea.innerText = calculus.numOne
    }
    else { calculus.numTwo += '5'; secondNumArea.innerText = calculus.numTwo }



})

six.addEventListener("click", () => {
    if (calculus.whatToDo === null) {

        calculus.numOne += '6';
        firstNumArea.innerText = calculus.numOne
    }
    else { calculus.numTwo += '6'; secondNumArea.innerText = calculus.numTwo }



})

seven.addEventListener("click", () => {
    if (calculus.whatToDo === null) {

        calculus.numOne += '7';
        firstNumArea.innerText = calculus.numOne
    }
    else { calculus.numTwo += '7'; secondNumArea.innerText = calculus.numTwo }



})

eight.addEventListener("click", () => {
    if (calculus.whatToDo === null) {

        calculus.numOne += '8';
        firstNumArea.innerText = calculus.numOne
    }
    else { calculus.numTwo += '8'; secondNumArea.innerText = calculus.numTwo }



})

nine.addEventListener("click", () => {
    if (calculus.whatToDo === null) {

        calculus.numOne += '9';
        firstNumArea.innerText = calculus.numOne
    }
    else { calculus.numTwo += '9'; secondNumArea.innerText = calculus.numTwo }



})

zero.addEventListener("click", () => {
    if (calculus.whatToDo === null) {

        calculus.numOne += '0';
        firstNumArea.innerText = calculus.numOne
    }
    else { calculus.numTwo += '0'; secondNumArea.innerText = calculus.numTwo }



})






