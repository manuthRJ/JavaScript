//User Role

let userRole = "admin";
let accessLevel;

if (userRole==="admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level: ",accessLevel);

//User LogedIn
let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, user!";
    }
} else {
    userMessage = "Please Log in to access the system";
}

console.log("User Message: ",userMessage);

//Switch Case

let userType = "subscriber";
let userCategory;

switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    
    case "manager":
        userCategory = "Manager";
        break;

    case "subscriber":
        userCategory = "Subscriber"
        break;

    default:
        userCategory = "Unkonown";
}

console.log("UserCategory: ", userCategory);

//Ternary Operator

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status: ",authenticationStatus);