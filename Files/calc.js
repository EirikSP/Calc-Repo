let Calculation = ""
let num = 0

function func() {
    Calculation += this.textContent;
    console.log(Calculation)
    updateScreen();
    
  }

document.getElementById("screen").innerHTML = "helol"

function updateScreen(){
    document.getElementById("screen").innerHTML = Calculation
}

const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const pluss = document.getElementById("pluss")
const minus = document.getElementById("minus")
const times = document.getElementById("times")
const slash = document.getElementById("slash")
const eq = document.getElementById("eq")
const del = document.getElementById("del")

console.log(nine)


if (one){
document.getElementById("one").addEventListener("click", func());

}
if (two){
document.getElementById("two").addEventListener("click", func());
}
if (three){
document.getElementById("three").addEventListener("click", func());
}
if (four){
document.getElementById("four").addEventListener("click", func());
}
if (five){
document.getElementById("five").addEventListener("click", func());
}
if (six){
document.getElementById("six").addEventListener("click", func());
}
if (seven){
document.getElementById("seven").addEventListener("click",func());
}
if (eight){
document.getElementById("eight").addEventListener("click", func());
}
if (nine){
document.getElementById("nine").addEventListener("click",func());
}
if (one){
document.getElementById("zero").addEventListener("click", func());
}
if (pluss){
document.getElementById("pluss").addEventListener("click", func());
}
if (minus){
document.getElementById("minus").addEventListener("click", func());
}
if (times){
document.getElementById("times").addEventListener("click", func());
}
if (slash){
document.getElementById("slash").addEventListener("click", func());
}

if (eq) {
document.getElementById("eq").addEventListener("click", function() {
    Calculation += this.textContent;
    num = eval(Calculation);
    document.getElementById("screen").innerHTML = num.toString()
});
}

if (del){
document.getElementById("del").addEventListener("click", func());
}

document.getElementById("screen").innerHTML = "helol"