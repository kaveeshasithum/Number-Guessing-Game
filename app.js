let count = 0;

let Randomnumber = Math.floor(Math.random() * 10) + 1;

let history = [];


function checkGuess(){

    let userGuess = document.getElementById("guessNumber").value;

    if(userGuess == ""){
        Swal.fire("Please enter a number");
        return;
    }

    if(isNaN(userGuess) || userGuess < 1 || userGuess > 10){
        Swal.fire("Please enter a number between 1 and 10");
        return;
    }

    if(count < 3){

        console.log(userGuess);
        console.log(Randomnumber);

        if(userGuess == Randomnumber){

            let guess = {
                randomNumber: Randomnumber,
                userGuess: userGuess,
                result: "Correct"
            };

            history.push(guess);

            corectnumber();

            count = 0;

            Randomnumber = Math.floor(Math.random() * 10) + 1;

        }

        else if(userGuess > Randomnumber){

            let guess = {
                randomNumber: Randomnumber,
                userGuess: userGuess,
                result: "Wrong"
            };

            history.push(guess);

            largenum();

            count++;

        }

        else if(userGuess < Randomnumber){

            let guess = {
                randomNumber: Randomnumber,
                userGuess: userGuess,
                result: "Wrong"
            };

            history.push(guess);

            lowernum();

            count++;

        }

        guesthistory();

        if(count == 3){

            setTimeout(function(){

                worongnumber();

                count = 0;

                Randomnumber = Math.floor(Math.random() * 10) + 1;

            }, 1000);

        }

    }

    document.getElementById("guessNumber").value = "";

}


// Correct Number Function

function corectnumber(){

    Swal.fire({
        title: "Congratulations!",
        text: "Your guess is correct!",
        icon: "success",
        draggable: true
    });

}


// Wrong Number Function

function worongnumber(){

    Swal.fire({
        icon: "error",
        title: "Game Over!",
        text: "You have used all 3 chances!"
    });

}


// Greater Number Function

function largenum(){

    Swal.fire({
        icon: "error",
        title: "Wrong Number!",
        text: "Greater Than the Random Number"
    });

}


// Smaller Number Function

function lowernum(){

    Swal.fire({
        icon: "error",
        title: "Wrong Number!",
        text: "Smaller Than the Random Number"
    });

}


// Guest History Function

function guesthistory(){

    let body = `
        <tr>
            <td>No</td>
            <td>Random Number</td>
            <td>User Guess</td>
            <td>Result</td>
        </tr>
    `;

    let i = 1;

    for(let guess of history){

        body += `
            <tr>
                <td>${i}</td>
                <td>${guess.randomNumber}</td>
                <td>${guess.userGuess}</td>
                <td>${guess.result}</td>
            </tr>
        `;

        i++;

    }

    document.getElementById("History").innerHTML = body;

}