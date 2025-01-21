/*Practice Task 
Suppose an organization arranges a "Dietary Services" program to provide diets to its employees and customers, based on a person's weight and day-to-day routine. You need to create an authorization-based code to provide access to people based on their roles in organization, such as employees, enrolled members for "Dietary Services," and subscribers.

If the person is an Employee, they are authorized to have access to "Dietary Services".

If the person is an Enrolled Member, they are authorized to have access to "Dietary Services" and one-on-one interaction with a dietician.

If the person is a Subscriber, they are authorized to have partial access to facilitate "Dietary Services" only.

If the person is a Non-Subscriber, they need to enroll or at least subscribe first to avail this facility.

You need to communicate with the user by printing a message indicating whether that person is eligible to avail which type of services.

/*Dietary Services

Define User Roles*/
let userRole = "employee";
let userAccess;

// User Access

switch (userRole){
    case "employee":
        userAccess = "You have access to Dietary Services";
        break;
    case "enrolledMember":
        userAccess = "You have access to Dietary Services and one-on-one interaction with a dietician";
        break;
    case "subscriber":
        userAccess = "You have partial access to facilitate Dietary Services only";
        break;
    default:
        userAccess = "You need to enroll or at least subscribe first.";
        break;
}

//user Eligibility
let userWeight = 100;
let userRoutine = true;
let needDiet;

if ((userWeight>=75)||(userRoutine === false)){
    needDiet = true;
} else{
    needDiet = false;
}

if (needDiet){
    console.log("Hello ",userRole,", Your weight is: ",userWeight,"KG, and you need a diet!");
    console.log("As You are a",userRole,", ",userAccess);
} else{
    console.log("You are good to go!");
}