function run() {
    const collectInput = getInput();
    const errorCheck = validate(collectInput);

    const printError = document.getElementById("error");
    const printRec = document.getElementById("recommendation");

    if (errorCheck === "") {
    const tipRecommend = calculate(collectInput);
    printRecommendation(tipRecommend, printRec, printError);
    } else {
    printErrorMsg(errorCheck, printRec, printError);
    }
    
}

//collect user input from page
function getInput() {
    const total = document.getElementById("total").value;
    const rating = document.getElementById("quality").value;
    const party = document.getElementById("party").value;

    const regExPrice = (/([^0-9.])/g);
    const regExParty = (/([^0-9])/g);
    const parseTotal = total.replace(regExPrice, '');
    

    const parseParty =  party.replace(regExParty, '');

    return [parseTotal, rating, parseParty];
}

//make sure that the total and party size are the right format
function validate(values) {

    let errorMessage = "";

    const totalCost = values[0];
    const partySize = values[2];

    if (totalCost === "") {
        errorMessage += "Enter your total bill<br>";
    }
    if (isNaN(totalCost)) {
        errorMessage += "Enter a valid bill amount<br>";
    }
    if (partySize === "") {
        errorMessage += "Enter your party size<br>";
    }
    if (isNaN(partySize)) {
        errorMessage += "Enter a valid party size<br>";
    }

    console.log(errorMessage);

    return errorMessage;

}

//calculate tip amount
function calculate(values) {
    const totalCost = values[0];
    const serviceQuality = values[1];
    const partySize = values[2]
    const serviceMultiplier = [
        .05,
        .1,
        .15,
        .2,
        .25
    ];

    const recommendedTip = ((totalCost * serviceMultiplier[serviceQuality])/partySize).toFixed(2);
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
    const submitButton = document.getElementById("submitButton");
    submitButton.onclick = function() {
        run();

    }
}