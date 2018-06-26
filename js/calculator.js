(function () {

    //create buttons for numbers and operators
    var numberButton = document.getElementsByClassName("numbers");
    var operatorButton = document.getElementsByClassName("operators");

    // All number event listeners go here
    for (let i = 0; i < numberButton.length; i++) {
        numberButton[i].addEventListener("click", function () { numOnScreen(i) });
        numberButton[i].addEventListener("click", function () { tempMem(i) }); //Store temp
    }

    // prints multiple number values on screen
    function numOnScreen(strNum) {
        if ((calScreen.innerHTML === "0") || (clearNum === true)) {
            calScreen.innerHTML = strNum;
            clearNum = false;
        } else {
            calScreen.innerHTML += strNum;
        }
    }

    // A function that clears the screen after operator button is pressed
    var clearNum = false;
    function clearScreen() {
        clearNum = true;
    }


    //A temp array to store numbers, and another array to perform action on
    var tempArr = [];
    var storeArr = [null, null, ""];

    function tempMem(num) {
        tempArr.push(num);
    }

    // Puts the tempArr values in to storeArr
    function storeMem(symbol) {
        var val = parseFloat(tempArr.join(""));
        console.log(val);

        if ((typeof val === "number") && (storeArr[0] === null)) {
            storeArr[0] = val;
        } else if ((typeof val === "number") && (storeArr[1] === null)) {
            storeArr[1] = val;
        }

        if (typeof symbol === "string") {
            storeArr[2] = symbol;
        }

        tempArr = [];
    }

    // Operation buttons +, -, =
    operatorButton[0].addEventListener("click", function () { storeMem(false) });
    operatorButton[0].addEventListener("click", equal); //equal sign & button orders matter
    operatorButton[0].addEventListener("click", clearScreen);
    operatorButton[1].addEventListener("click", function () { storeMem("+") }); // add button
    operatorButton[1].addEventListener("click", clearScreen);
    operatorButton[2].addEventListener("click", function () { storeMem("-") }); // subtract button
    operatorButton[2].addEventListener("click", clearScreen);
    operatorButton[3].addEventListener("click", function () { storeMem("*") }); // multiply button
    operatorButton[3].addEventListener("click", clearScreen);
    operatorButton[4].addEventListener("click", function () { storeMem("/") }); // divide button
    operatorButton[4].addEventListener("click", clearScreen);


    function equal() {
        var finalResult = 0;
        console.log(storeArr);

        if (storeArr[2] === "+") {
            finalResult = add(storeArr);
        } else if (storeArr[2] === "-") {
            finalResult = subtract(storeArr);
        } else if (storeArr[2] === "*") {
            finalResult = multiply(storeArr);
        } else if (storeArr[2] === "/") {
            finalResult = divide(storeArr);
        }

        storeArr = [null, null, ""];
        calScreen.innerHTML = finalResult;
    }

    //This function will be called on by the equal function
    function add(arr) {
        var result = arr[0] + arr[1];

        return result;
    }

    function subtract(arr) {
        var result = arr[0] - arr[1];

        return result;
    }

    function multiply(arr) {
        var result = arr[0] * arr[1];

        return result;
    }

    function divide(arr) {
        var result = arr[0] / arr[1];

        return result;
    }

})();