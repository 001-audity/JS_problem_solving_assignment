//https://github.com/001-audity/JS_problem_solving_assignment

//Task-1:Convert length from kilometer to meter
function kilometerToMeter(lengthInKilometer) {

    //length cannot be negative.
    if (lengthInKilometer < 0) {
        console.log("Length cannot be negative,please check your input.");
    }


    //1 kilometer = 1000 meters
    else {
        var lengthInMeter = lengthInKilometer * 1000;
        return lengthInMeter;
    }

}


//Task-2:Calculate the total budget needed to buy watches, phones and laptops
function budgetCalculator(numberOfWatches, numberOfPhones, numberOfLaptops) {

    //number of objects cannot be negative.
    if (numberOfWatches < 0 || numberOfPhones < 0 || numberOfLaptops < 0) {
        console.log("Amount cannot be negative.");
    }


    //cost per watch is 50, cost per phone is 100 ,cost per laptop is 500
    else {
        var totalCost;
        var costOfWatches = numberOfWatches * 50;
        var costOfPhones = numberOfPhones * 100;
        var costOfLaptops = numberOfLaptops * 500;
        totalCost = costOfWatches + costOfPhones + costOfLaptops;
        return totalCost;
    }
}



//Task-3:Calculate the total cost for staying in a hotel 
function hotelCost(numberOfDays) {

    //numberOfDays cannot be negative
    if (numberOfDays < 0) {
        console.log("Number of days cannot be negative.");
    }

    //If numberOfDays is not negative
    else {

        var totalCost = 0;
        //If numberOfDays is between 0 to 10
        if (numberOfDays <= 10) {
            totalCost = numberOfDays * 100;
        }

        //If numberOfDays is between 11 to 20
        else if (numberOfDays <= 20) {
            var costForFirstTen = 10 * 100;
            var remainingDays = numberOfDays - 10;
            var costForRemaining = remainingDays * 80;
            totalCost = costForFirstTen + costForRemaining;
        }

        //If numberOfDays is greater than 20
        else {
            var costForFirstTen = 10 * 100;
            var costForSecondTen = 10 * 80;
            var remainingDays = numberOfDays - 20;
            var costForRemaining = remainingDays * 50;
            totalCost = costForFirstTen + costForSecondTen + costForRemaining;

        }
        return totalCost;
    }

}




//Task-4: Return the biggest length string from the array of strings.
function megaFriend(friendNames) {

    if (friendNames.length == 0) {
        console.log("Your array is empty.")
    }


    var biggestLengthName = "";

    for (var i = 0; i < friendNames.length; i++) {
        var str = friendNames[i];
        //Compare with the current max length string 
        if (biggestLengthName.length < str.length) {
            biggestLengthName = str;
        }

    }

    return biggestLengthName;

}