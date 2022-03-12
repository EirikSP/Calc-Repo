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

for (let i = 0; i < allBts.length; i++) {
    let element = allBts[i];
    if (element.id == eq){
        element.addEventListener("click", function(ev, element) {
            Calculation += element.textContent;
            num = eval(Calculation);
            document.getElementById("screen").innerHTML = num.toString()
        })
    } else {
        element.addEventListener("click", func(ev, element));
    }
    
    
    
    
}
