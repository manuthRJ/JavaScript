let length;
let width;

//Function

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById("width").value);

    //Input Validation

    if(isNaN(length)||isNaN(width)){
        console.error("Invalid Input!");
        ocument.getElementById('result').innerText = "Error: Please enter valid numbers.";
        return;
    } else {

        //Calculation
        const area = length * width;
        document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
        return;

    }

    
}


