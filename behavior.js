//OLD MESSY ALL IN ONE FUNCTION
/*

function run() {


    var total = document.getElementById("total").value;
    var rating = document.getElementById("quality").value;
    var party = document.getElementById("party").value;

    //check for valid input in total and party fields
    //need to make error messages disappear when fields are changed to valid inputs

    if (total ==="" && party ==="") {
        error.innerHTML = "Enter your total and party size";
    } else if (total ==="") {
        error.innerHTML = "Enter your total";
    } else if (party === "") {
        error.innerHTML = "Enter your party size";
    } else if (isNaN(total) && isNaN(party)) {
        error.innerHTML = "Enter a valid total and party size";
    } else if (isNaN(total)) {
        error.innerHTML = "Enter a valid total";
    } else if (isNaN(party)) {
        error.innerHTML = "Enter a valid party size";
    } else
    
    {

    error.innerHTML = "";
    var serviceQuality = [  "5star",
                            "4star",
                            "3star",
                            "2star",
                            "1star"];
    var service = serviceQuality.indexOf(rating);
    var percentage = [.25, .2, .15, .10, .05];
    var tipPercentage = percentage[service];

    var recommendedTip = ((total * tipPercentage) / party);
    var tipRounded = recommendedTip.toFixed(2);
    var print = document.getElementById("recommendation");
    print.innerHTML = "Suggested tip<br>$" + tipRounded;
    }
} */

//UPDATED FUNCTION

function run() {
    let collectInput = getInput();
    console.log(collectInput);

    validate(collectInput);
}

function getInput() {
    var total = document.getElementById("total").value;
    var rating = document.getElementById("quality").value;
    var party = document.getElementById("party").value;

    console.log(total);
    return input = [total, rating, party];
}

function validate(values) {
    if (typeof values[0] === "string" && typeof values[2] === "string") {
        console.log("This data is correct");
    } else {
        console.log("Ya datas wrong son");
    }
}

function calculate() {

}

function print() {

}

/* ALRIGHT SO WE FIXIN THIS FUNCTION AFTER 8 MONTHS

Run function is not abstracted at all. No modularity. Break it into smaller blocks:
1. grab values
    - get elements and save them to variables

2. validate input
    - check inputs and determine they are the correct format.

3. perform calculation
    - if inputs are valid, perform calculation. If inputs are not correct, do not perform calculation.

4. update page
    - update page with either an error message or the calculation.
    - determined by validate step.
*/




//click handler
window.onload = init;

function init() {
    var submitButton = document.getElementById("submitButton");
    submitButton.onclick = function() {
        run();

    }
}




