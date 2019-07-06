function run() {
    var total = document.getElementById("total").value;
    var rating = document.getElementById("quality").value;
    var party = document.getElementById("party").value;

    //put in the checks to make sure the total and party inputs are valid


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

window.onload = init;

function init() {
    var submitButton = document.getElementById("submitButton");
    submitButton.onclick = function() {
        run();

    }
}
//click handler
