// write a function called countdown that accepts a number as a parameter
//every 1000 milli decrease the value by 1 
//console.log new value each second
//when value <= 0 stop
//console.log done!

function countDown(num) { //declaring a function that takes a number
    let round = setInterval(function() { //declaring a variable set to setinterval with an anon function and 1000 milliseconds
        num--; //subtracting 1 from num each round
        if (num <= 0) { //if the num is less than or equal to 0
            clearInterval(round); //stop the setInterval
            console.log('Done!'); //console log done
        } else { //if the num is larger than 0
            console.log(num); //console.log the num it is
        }
    }, 1000) // this line completes the round variable that is setinterval
}

countDown(4);


//write a function called randomGame
//every second try a new random number
//every new random number is +1 to counter
//if random number is > .75 stop
//console log how many tries the counter is up to
function randomGame() { //declare function
    let counter = 0 //assign a counter to 0
    
    let randomNum = setInterval(function() { //create a variable with a set interval with the arguments of an anon function and 1000 milliseconds
        let i = Math.random(); //assign a variable to make a random #
        counter++ //every time we make a random # add 1 to counter

        if(i > 0.75) { //if the # is larger than .75
            clearInterval(randomNum); //stop the counter
            console.log(`Tries: ${counter}`); //console.log the # of times it took to stop
        }
    }, 1000); // this line completes the randomNum variable that is setinterval
}

randomGame();