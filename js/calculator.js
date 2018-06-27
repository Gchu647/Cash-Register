(function () {

    //create buttons for numbers and operators
    var numberButton = document.getElementsByClassName("numbers");
    var operatorButton = document.getElementsByClassName("operators");

    // All number event listeners go here
    for (let i = 0; i < numberButton.length; i++) {
        if (i < 10) {
            numberButton[i].addEventListener("click", function () { numOnScreen(i) });
            numberButton[i].addEventListener("click", function () { tempMem(i) });
        } else {
            numberButton[i].addEventListener("click", function () { numOnScreen(".") });
            numberButton[i].addEventListener("click", function () { tempMem(".") });
        }
    }

    // prints multiple number values on screen
    function numOnScreen(strNum) {
        if ((calScreen.innerHTML === "$ 0") || (clearNum === true)) {
            calScreen.innerHTML = "$ " + strNum;
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

    // Storing operation results to memory
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

    // All operator buttons
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

    //Equal function calls on all the other operator functions
    function equal() {
        var finalResult = 0;
        var testResult = 0;
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
        calScreen.innerHTML = "$ " + finalResult.toFixed(2);

        accountModule.load(finalResult);
    }

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

    // Deposit, widthdraw, and balance
    var accountButtons = document.getElementsByClassName("accounts"); //Move it up later
    // accountButtons[0].addEventListener("click", testMem);
    accountButtons[0].addEventListener("click", depositCash);
    accountButtons[1].addEventListener("click", withdrawCash);
    accountButtons[2].addEventListener("click", balanceCash);

    /* Storing single numbers to memory
    function testMem() {
        var val = parseFloat(tempArr.join(""));
        accountModule.load(val);
    }
    */

    function depositCash() {
        accountModule.desposit();
    }

    function withdrawCash() {
        accountModule.widthdraw();
    }

    function balanceCash() {
        var cash = accountModule.balance();
        calScreen.innerHTML = "Balance: $" + cash;
    }

    var accountModule = (function () {
        var memory = 0;
        var total = 0;

        var load = function (num) {
            total = num;
        }

        var desposit = function () {
            memory += total;
        }

        var widthdraw = function () {
            memory -= total;
        }

        var balance = function () {
            return memory.toFixed(2);
        }

        return {
            load: load,
            desposit: desposit,
            widthdraw: widthdraw,
            balance: balance
        }
    })();

})();