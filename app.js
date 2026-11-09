let userGuess;
let count = 0;
let Randomnumber = Math.floor(Math.random() * 10) + 1;
function checkGuess() {

    userGuess = document.getElementById("guessNumber").value;
    if (count < 3) {
        console.log(userGuess);
        console.log(Randomnumber);
        if (userGuess == Randomnumber) {

            corectnumber();
            let guess = {
                randomNumber: Randomnumber,
                userGuess: userGuess,
                result: "Correct"

            }
            history.push(guess);

            count = 0;
            Randomnumber = Math.floor(Math.random() * 10) + 1;


        } else if (userGuess > Randomnumber) {
            let guess = {
                randomNumber: Randomnumber,
                userGuess: userGuess,
                result: "Wrrong"

            }
            history.push(guess);
            largenum()

            count++

        }
        else if (userGuess < Randomnumber) {
            lowernum()
            let guess = {
                randomNumber: Randomnumber,
                userGuess: userGuess,
                result: "Wrrong"

            }
            history.push(guess);
            count++
        }
        else {

            worongnumber()
            let guess = {
                randomNumber: Randomnumber,
                userGuess: userGuess,
                result: "Wrrong"

            }
            history.push(guess);
            count++
        }
        guesthistory()


    }
     if (count == 3) {
        count = 0;
        Randomnumber = Math.floor(Math.random() * 10) + 1;
    }


}

function corectnumber() {
    Swal.fire({
        title: "congratulations",
        icon: "success",

        draggable: true
    });
}

function worongnumber() {
    Swal.fire({
        icon: "error",
        title: "You are guess is wrong number",
        text: "Please try again",

    });
}
function largenum() {
    Swal.fire({
        icon: "error",
        title: "You are guess is wrong number",
        text: "Greter Than the Ramdom Number",

    });
}
function lowernum() {
    Swal.fire({
        icon: "error",
        title: "You are guess is wrong number",
        text: "Smaller Than the Ramdom Number",

    });

}

const history = [];

let perHistory = {
    randomNumber: Randomnumber,
    userGuess: userGuess,
    result: result
}

history.push(perHistory);

function guesthistory() {
    let body = "";
    for (let i = 0; i < history.length; i++) {
        let item = history[i];
        body += `
            <tr>
                <td>${i + 1}</td>
                <td>${item.randomNumber}</td>
                <td>${item.userGuess}</td>
                <td>${item.result}</td>
            </tr>
        `;
    }
    document.getElementById("History").innerHTML = body;
}