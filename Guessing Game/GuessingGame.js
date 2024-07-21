const max = prompt("Enter the maximum number:");

const random = Math.floor(Math.random() * max )+ 1;

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("You quit.");
        break;
    }
    if(guess == random){
        console.log("Congratulations!! your guess was correct .Random value generated is ",random);
        break;
    }
    // else{
    //     console.log("Your guess is incorrect .Please try again");
    // }
    else if(guess < random){
        guess = prompt("Your guess is smaller than the random value generated.please try again");
    }
    else{
        guess = prompt("Your guess is bigger than the random value generated.please try again");
    }
}