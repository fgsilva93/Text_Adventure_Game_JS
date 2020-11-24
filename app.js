//Simple Text Adventure Game:
alert("Welcome to my short text adventure game");
let person = window.prompt("What is your name?");
let age = window.prompt("What is your age?");
alert("Hello, " + person + ", your " + age + " years old");

// status information:
let health = 10;

// Checking if you are old enough to play the game, must be 13 or older to play.
if (age >= 13) {
    alert("Your old enough to play!");

    // Checking if you want to play or not?
    let wantToPlay = window.prompt("Do you want to play?").toLowerCase();
    if (wantToPlay == "yes") {
        alert("Lets play!");
        alert("You are starting with " + health + " heatlh.");
        alert("You open your eyes and suddenly you are standing on a road that divdes into two paths.");
        
        // First choice results:
        let leftOrRight = window.prompt("First Choice... Left or Right (Left/Right)? ");

        // The left choice results:
        if (leftOrRight == "left") {
            alert("Nice, you follow the path and reach a lake... Do you want to swim across or go around (across/around)?");
            
            // The across/around choice results:
            let ans = window.prompt("Nice, you follow the path and reach a lake... Do you want to swim across or go around (across/around)?");

            // The around choice results:
            if (ans == "around") {
                alert("You went around and reached the other side of the lake, with mo problrm");
            } 

            // The arcoss choice results:
            else if (ans == "across") {
                alert("You managed to get across, but were bit by a vicious monster fish and lost 5 health.");
                health -= 5;
            } else {
                alert("You go to the river and try to go through it, but a bears spots you and you are attacked and lost your life..");
                health -= 10;
                if (health <= 0) {
                    alert("You have 0 health and lost the game!");
                    alert("GAME OVER!");
                };
            };

            // The house/river choice reults:
            let ans2 = window.prompt("You notice a house and a river, which do you go to (house/river)?");
            if (ans2 == "house") {
                alert("You knock on the door and no one answers and out of nowhere you get attecked from behind by a stranger, you lost 5 health");
                health -= 5;

                // The results depending on your health:
                if (health <= 0) {
                    alert("You now have 0 health and lost the game...");
                    console.log("GAME OVER!");
                } else {
                    alert("You have survived the attack by stranger and the owner comes and helps you fight off the attacker");
                    alert("The owner helps you get into a close by village and you find a place to stay for now You Win!");
                };

            // The river choice resutls:
            } else {
                alert("You go to the river and try to go through it, but a bears spots you and you are attacked and lost your life...");
                health -= 10;
                if (health <= 0) {
                    alert("You have 0 health and lost the game...");
                    alert("GAME OVER!")
                };
            };
            
        // The right choice results:
        } else {
            alert("You were thinking of going right but out of nowhere you get struck by an arrow to the knee and bleed out alot and lost all of your heatlh.");
            health -= 10;
            if (health <= 0) {
                alert("You have 0 health and lost the game!");
                alert("GAME OVER!");
            };
        }
    
    //The results of saying no to playing game: 
    } else {
        alert("Ok, Bye!");
    };

// The results due not being old enough: 
} else {
    alert("Sorry your not old enough to play the game.");
    alert("Refresh the webpage to try play again?");
};