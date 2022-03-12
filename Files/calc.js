let Calculation = ""
let num = 0

function func(ev, element) {
    Calculation += element.text;
    console.log(Calculation)
    updateScreen();
    
  }

document.getElementById("screen").innerHTML = "helol"

function updateScreen(){
    document.getElementById("screen").innerHTML = Calculation
}

let allBts = document.getElementsByClassName("button")

document.addEventListener("click", (e) => {
    element = e.target;
    if (element.tagName == "BUTTON" && element.id != "eq" && element.id != "del") {
        Calculation += element.innerText;
        console.log(Calculation);
        updateScreen();
    }
    else if (element.tagName == "BUTTON" && element.id == "eq") {
        num = eval(Calculation);
        document.getElementById("screen").innerHTML = num.toString();
        Calculation = "";
    }
    else if (element.tagName == "BUTTON" && element.id == "del") {
        Calculation = "";
        updateScreen();
    }
})


    
    