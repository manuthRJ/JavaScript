//initialize Count to 0
let count = 0;
let milestone1 = 10;
let milestone2 = 20;
let maxCount = 0;

//Increase Count Function
function increaseCount() {
    count++;
    checkMaxFollowers();
    displayCount();
    checkCountValue();
}

//Decrese follower count
function decreaseCount() {
    if (count > 0) {
        count--;
        checkMaxFollowers();
        displayCount();
        checkCountValue();
    }
}

//Check All time Max no. of followers
function checkMaxFollowers() {
    if (count > maxCount) {
        maxCount = count;
    }
}


//display Count
function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}


//Check count of followers
function checkCountValue() {
    if (milestone1 >= maxCount) {
        if (maxCount === milestone1) {
            alert("You gained 10 followers! Congrats!");
        }
    }

    if (milestone2 + 1 > maxCount) {
        if (maxCount == milestone2) {
            alert("You gained 20 followers! Congrats!");
        }

    }
}

//Rest Follower Count
function resetCount() {
    count = 0;
    alert("Your Followers Count has been reset!");
    displayCount();
}

