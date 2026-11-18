// ========================================
// VARIABLES
// ========================================

let userGuess;
let count = 0;
let result;

let history = [];

let Randomnumber = Math.floor(Math.random() * 10) + 1;


// ========================================
// CHECK GUESS
// ========================================

function checkGuess() {

    userGuess = Number(document.getElementById("guessNumber").value);

    // Check Empty Input

    if (document.getElementById("guessNumber").value === "") {

        alert("Please enter a number!");

        return;
    }

    // Check Number Range

    if (userGuess < 1 || userGuess > 10 || !Number.isInteger(userGuess)) {

        alert("Please enter a number between 1 and 10!");

        return;
    }

    // Check 3 Chances

    if (count < 3) {

        count++;

        if (userGuess == Randomnumber) {

            result = "Correct";

            corectnumber();

        } else if (userGuess > Randomnumber) {

            result = "Wrong";

            largenum();

        } else {

            result = "Wrong";

            lowernum();

        }

        // Add History

        let perHistory = {

            userGuess: userGuess,

            result: result

        };

        history.push(perHistory);

        guesthistory();

        // Correct Answer

        if (result == "Correct") {

            count = 0;

            Randomnumber = Math.floor(Math.random() * 10) + 1;

        }

        // 3 Chances Over

        else if (count == 3) {

            Swal.fire({

                icon: "warning",

                title: "Game Over!",

                text: "Correct Number was " + Randomnumber

            });

            count = 0;

            Randomnumber = Math.floor(Math.random() * 10) + 1;

        }

    }

    document.getElementById("guessNumber").value = "";

}


// ========================================
// CORRECT NUMBER
// ========================================

function corectnumber() {

    Swal.fire({

        title: "Congratulations!",

        text: "Your Guess is Correct!",

        icon: "success",

        draggable: true

    });

}


// ========================================
// WRONG NUMBER
// ========================================

function worongnumber() {

    Swal.fire({

        icon: "error",

        title: "Your Guess is Wrong",

        text: "Please try again"

    });

}


// ========================================
// LARGE NUMBER
// ========================================

function largenum() {

    Swal.fire({

        icon: "error",

        title: "Wrong Number",

        text: "Greater Than the Random Number"

    });

}


// ========================================
// LOWER NUMBER
// ========================================

function lowernum() {

    Swal.fire({

        icon: "error",

        title: "Wrong Number",

        text: "Smaller Than the Random Number"

    });

}


// ========================================
// GUESS HISTORY
// ========================================

function guesthistory() {

    let body = `

        <tr>

            <th>No</th>

            <th>User Guess</th>

            <th>Result</th>

        </tr>

    `;

    let i = 1;

    for (let num of history) {

        body += `

            <tr>

                <td>${i}</td>

                <td>${num.userGuess}</td>

                <td>${num.result}</td>

            </tr>

        `;

        i++;

    }

    document.getElementById("history").innerHTML = body;

}