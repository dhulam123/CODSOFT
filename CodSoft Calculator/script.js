var screen=document.querySelector(".input")
var buttons=document.querySelectorAll(".number")
screen.value=""
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        screen.value=screen.value+button.getAttribute("data")
        console.log(screen.value+"aaaa")
    })
})

function rec(){
    var result = 1/screen.value
    screen.value  =result
}

function sqrt(){
    var result = Math.sqrt(screen.value)
    screen.value  =result
}

function complement(){
    var result = -screen.value
    screen.value  =result
}

function Sin() {
        var inputValue = document.getElementById("display").value;
        var angleInDegrees = parseFloat(inputValue);
        var angleInRadians = (angleInDegrees * Math.PI) / 180;
        var sinValue = Math.sin(angleInRadians);
        document.getElementById("display").value = sinValue;
}

function Cos() {
    var inputValue = document.getElementById("display").value;
    var angleInDegrees = parseFloat(inputValue);
    var angleInRadians = (angleInDegrees * Math.PI) / 180;
    var cosValue = Math.cos(angleInRadians);
    document.getElementById("display").value = cosValue;
}

function Tan() {
    var inputValue = document.getElementById("display").value;
    var angleInDegrees = parseFloat(inputValue);
    var angleInRadians = (angleInDegrees * Math.PI) / 180;
    var tanValue = Math.tan(angleInRadians);
    document.getElementById("display").value = tanValue;
}

function sinInverse(){
    var inputValue = document.getElementById("display").value;
    var value = parseFloat(inputValue);
    if (value >= -1 && value <= 1) {
        var inverseSinValue = Math.asin(value);
        var inverseSinDegrees = (inverseSinValue * 180) / Math.PI;
        document.getElementById("display").value = inverseSinDegrees;
    } else {
        document.getElementById("display").value = "Value must be between -1 to 1 ";
    }
}

function cosInverse(){
    var inputValue = document.getElementById("display").value;
    var value = parseFloat(inputValue);
    if (value >= -1 && value <= 1) {
        var inverseCosValue = Math.acos(value);
        var inverseCosDegrees = (inverseCosValue * 180) / Math.PI;
        document.getElementById("display").value = inverseCosDegrees;
    } else {
        document.getElementById("display").value = "Value must be between -1 to 1 ";
    }
}

function tanInverse(){
    var inputValue = document.getElementById("display").value;
    var value = parseFloat(inputValue);
    var inverseTanValue = Math.atan(value);
    var inverseTanDegrees = (inverseTanValue * 180) / Math.PI;
    document.getElementById("display").value = inverseTanDegrees;
}

function power10(){
    var inputValue = document.getElementById("display").value;
    var exponent = parseFloat(inputValue);
    var result1 = Math.pow(10, exponent);
    document.getElementById("display").value = result1;
}

function solve(){
    var inputValue = document.getElementById("display").value;

        if (inputValue.includes("(") || inputValue.includes(")")) {
                var result = eval(inputValue);
                document.getElementById("display").value = result;
        } else {
                var result = eval(inputValue);
                document.getElementById("display").value = result;
        }
}

function clearData(){
    screen.value="";
}

function cutInput() {
    var currentInput = document.getElementById('display').value;
    document.getElementById('display').value = currentInput.slice(0, -1);
}

function power() {
    var expr = screen.value;
    var parts = expr.split("^");
    console.log("zzzz"+parts)
    if (parts.length === 2) {
        var base = parseFloat(parts[0]);
        var exponent = parseFloat(parts[1]);

        console.log(base+"mmm")
        console.log(exponent+"nnn")

        if (!isNaN(base) && !isNaN(exponent)) {
            var result = Math.pow(base, exponent);
            screen.value = result;
        } else {
            screen.value = "Errors";
        }
    }
     else {
        screen.value = "Error";
    }
}

function sqrt() {
    var expr = screen.value;
    var operand = parseFloat(expr);

    if (!isNaN(operand)) {
        var result = Math.sqrt(operand);
        screen.value = result;
    } else {
        screen.value = "Error";
    }
}

function square(){
    var result  = screen.value * screen.value;

    screen.value=result
}

function factorial(){
    var value = screen.value
    var fact = 1;
    for (i = 1; i <= value; i++) {
        fact *= i;
    }
    screen.value = fact
}

function log(){
    var result = Math.log10(screen.value)
    screen.value  = result
}

function exponential(){
    var result = Math.powe(screen.value)
    screen.value = result
}

function Standardshow(){
    var scientificHeading = document.getElementById('scientificHeading');
    var standardHeading = document.getElementById('standardHeading');

    var btns = document.getElementById('btn');
    var screen =  document.getElementById('screen');

    var scientific = document.getElementById('scientific');
 
    if(btns.style.display === 'none' || btns.style.display === ''){
        scientificHeading.style.color = "white";
        standardHeading.style.color = "greenyellow";

        btns.style.display = 'flex';
        screen.style.display = 'flex';
        scientific.style.display = 'none';
        document.getElementById("screen").style.borderTop = "2px solid greenyellow";
    }
}

function Scientificshow(){
    var scientificHeading = document.getElementById('scientificHeading');
    var standardHeading = document.getElementById('standardHeading');

    var scientific = document.getElementById('scientific');

    var btns = document.getElementById('btn');
    var screen =  document.getElementById('screen');
    
    if(scientific.style.display === 'none' || scientific.style.display === ''){
        scientificHeading.style.color = "aqua";
        standardHeading.style.color = "white";

        btns.style.display = 'none';
        scientific.style.display = 'flex';
        screen.style.display = "block";
        document.getElementById("screen").style.borderTop = "2px solid aqua";
    }
}