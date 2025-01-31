//initialize Count to 0
let count = 0;

//Increase Count Function
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

//display Count
function displayCount (){
    document.getElementById("countDisplay").innerHTML = count;
}

//Check count of followers
function checkCountValue(){
    if (count === 10){
        alert("You gained 10 followers! Congrats!");
    } else if(count === 20){
        alert("You gained 20 followers! Congrats!");
    }
}