// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
    {
        username: "Armaanio123",
        password: "Origami47"
    },
    {
        username: "Shaanio123",
        password: "Origami17"
    },
    {
        username: "Lauren123",
        password: "Origami14"
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsFeed = [
    {
        username: "jefff",
        timeline: "Whats up!"
    },
    {
        username: "12Tom",
        timeline: "How's it going guys!"
    },
    {
        username: "SilverBurrito",
        timeline: "What is the meaning of life"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass){
    for (var i = 0; i < database.length; i++){
        if (database[i].username === user && database[i].password === pass){
            return true;
        } else {
            return false;
        }
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password!");
    }
}

signIn(userNamePrompt, passwordPrompt);