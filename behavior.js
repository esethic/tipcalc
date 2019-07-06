//calculate and print
function run() {


    var total = document.getElementById("total").value;
    var rating = document.getElementById("quality").value;
    var party = document.getElementById("party").value;

    //check for valid input in total and party fields
    //need to make error messages disappear when fields are changed to valid inputs

    if (isNaN(total) && isNaN(party)) {
        error.innerHTML = "Enter a valid total and party size";
        return;

    } else if (isNaN(total)) {
        error.innerHTML = "Enter a valid total";
        return;

    } else if (isNaN(party)) {
        error.innerHTML = "Enter a valid party size";
        return;

    } else {


    var serviceQuality = [  "5star",
                            "4star",
                            "3star",
                            "2star",
                            "1star"];
    var service = serviceQuality.indexOf(rating);
    var percentage = [.25, .2, .15, .10, .05];
    var tipPercentage = percentage[service];

    var recommendedTip = ((total * tipPercentage) / party);
    var print = document.getElementById("recommendation");
    print.innerHTML = "Suggested tip: $" + recommendedTip;
    }
}

//click handler
window.onload = init;

function init() {
    var submitButton = document.getElementById("submitButton");
    submitButton.onclick = function() {
        run();

    }
}

