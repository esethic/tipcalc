function run() {
    let collectInput = getInput();
    let errorCheck = validate(collectInput);

    let printError = document.getElementById("error");
    let printRec = document.getElementById("recommendation");

    if (errorCheck === "") {
    let tipRecommend = calculate(collectInput);
    printRecommendation(tipRecommend, printRec, printError);
    } else {
    printErrorMsg(errorCheck, printRec, printError);
    }
    
}

//collect user input from page
function getInput() {
    let total = document.getElementById("total").value;
    let rating = document.getElementById("quality").value;
    let party = document.getElementById("party").value;

    const regExPrice = (/([^0-9.])/g);
    const regExParty = (/([^0-9])/g);
    let parseTotal = total.replace(regExPrice, '');
    

    let parseParty =  party.replace(regExParty, '');

    return [parseTotal, rating, parseParty];
}

//make sure that the total and party size are the right format
function validate(values) {

    let errorMessage = "";

    if (values[0] === "") {
        errorMessage += "Enter your total bill<br>";
    }
    if (isNaN(values[0])) {
        errorMessage += "Enter a valid bill amount<br>";
    }
    if (values[2] === "") {
        errorMessage += "Enter your party size<br>";
    }
    if (isNaN(values[2])) {
        errorMessage += "Enter a valid party size<br>";
    }

    console.log(errorMessage);

    return errorMessage;

}

//calculate tip amount
function calculate(values) {
    let totalCost = values[0];
    let serviceQuality = values[1];
    let partySize = values[2]
    let serviceMultiplier = [
        .05,
        .1,
        .15,
        .2,
        .25
    ];

    let recommendedTip = ((totalCost * serviceMultiplier[serviceQuality])/partySize).toFixed(2);
    return recommendedTip;

}

//called if there are errors
function printErrorMsg(message, recId, errorId) {
    recId.innerHTML = "";
    errorId.innerHTML = message;

}

//called if no errors
function printRecommendation(tip, recId, errorId) {
    recId.innerHTML = "Suggested tip<br>$" + tip;
    errorId.innerHTML = "";
}

//click handler
window.onload = init;

function init() {
    let submitButton = document.getElementById("submitButton");
    submitButton.onclick = function() {
        run();

    }
}