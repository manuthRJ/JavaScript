let grocery1;
let grocery2;
let grocery3;

//Function

function groceryTracker(){
    grocery1 = parseFloat(document.getElementById("grocery1").value);
    grocery2 = parseFloat(document.getElementById("grocery2").value);
    grocery3 = parseFloat(document.getElementById("grocery3").value);

    console.log("grocery1:", grocery1);
    console.log("grocery2:", grocery2);
    console.log("grocery3:", grocery3);

    if(isNaN(grocery1)||isNaN(grocery2)||isNaN(grocery3)){
        document.getElementById('total').innerText = "Enter Valid Values";
        return;
    }

    let total = grocery1 + grocery2 + grocery3;
    document.getElementById('total').innerText = `The total amount is: $ ${total}`;
    return;
}