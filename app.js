//Simple Text Adventure Game:
console.log("Welcome to my text adventure game");
let person = window.prompt("What is your name?");
let age = window.prompt("What is your age?");
console.log("Hello, " + person + ", your " + age + " years old");

// status information:
let health = 10;

// Checking if you are old enough to play the game, must be 13 or older to play.
if (age >= 13) {
    console.log("Your old enough to play!")

    // Checking if you want to play or not?
    let wantToPlay = window.prompt("Don you want to play?").toLowerCase()
    if (wantToPlay == "yes") {
        console.log("Lets play!");
        console.log("You are starting with " + health + " health");
        console.log("You open your eyes and suddenly you are standing on a road that divdes into two paths.");

        // First choice results:
        let leftOrRight = window.prompt("First Choice... Left or Right (Left/Right)? ");

        // The left choice results:
        if (leftOrRight == "left") {
            console.log("Nice, you follow the path and reach a lake... Do you want to swim across or go around (across/around)?");

            // The across/around choice results:
            let ans = window.prompt("Nice, you follow the path and reach a lake... Do you want to swim across or go around (across/around)?");

            // The around choice results:
            if (ans == "around") {
                console.log("You went around and reached the other side of the lake, with mo problrm");
            } 

            // The arcoss choice results:
            else if (ans == "across") {
                console.log("You managed to get across, but were bit by a vicious monster fish and lost 5 health.");
                health -= 5;
            } else {
                console.log("You go to the river and try to go through it, but a bears spots you and you are attacked and lost your life..");
                health -= 10;
                if (health <= 0) {
                    console.log("You have 0 health and lost the game!");
                    console.log("GAME OVER!");
                }
            }

            // The house/river choice reults:
            let ans2 = window.prompt("You notice a house and a river, which do you go to (house/river)?");
            if (ans2 == "house") {
                console.log("You knock on the door and no one answers and out of nowhere you get attecked from behind by a stranger, you lost 5 health");
                health -= 5;

                // The results depending on your health:
                if (health <= 0) {
                    console.log("You now have 0 health and lost the game...");
                    console.log("GAME OVER!");
                } else {
                    console.log("You have survived the attack by stranger and the owner comes and helps you fight off the attacker");
                    console.log("The owner helps you get into a close by village and you find a place to stay for now You Win!")
                }
            // The river choice resutls:
            } else {
                console.log("You go to the river and try to go through it, but a bears spots you and you are attacked and lost your life...");
                health -= 10;
                if (health <= 0) {
                    console.log("You have 0 health and lost the game...");
                }
            }
        // The right choice results:
        } else {
            console.log("You were thinking of going right but out of nowhere you get struck by an arrow to the knee and bleed out alot and lost all of your heatlh.");
            health -= 10
            if (health <= 0) {
                console.log("You have 0 health and lost the game!");
                console.log("GAME OVER!")
            }
        }
    } else {
        console.log("Ok, Bye!")
    }
} else {
    console.log("Sorry your not old enough to play the game.")
}