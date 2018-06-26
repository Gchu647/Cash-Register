(function () {

    //create buttons for numbers and operators
    var numberButton = document.getElementsByClassName("numbers");
    var operatorButton = document.getElementsByClassName("operators");

    // need to add more number event listeners here
    for (let i = 0; i < numberButton.length; i++) {
        numberButton[i].addEventListener("click", function () { numOnScreen(i) });
        numberButton[i].addEventListener("click", function () { storeMem(i) });
    }

    /* prints number value on screen
    function numOnScreen(num) {
        calScreen.innerHTML = num;
    } */

    //Upgraded version
    //Store the longer numbers in a variable and make that variable equals the innerHTML at the end.
    function testFunction(strNum) {
        if (calScreen.innerHTML === "0") {
            calScreen.innerHTML = strNum;
        } else {
            calScreen.innerHTML += strNum;
        }
    }

    //Array that stores to numbers and a symbol, which will be evaluated by equal sign
    var storeArr = [null, null, ""];

    //store numbers and symbols, but I need it to store multiple rather than single numbers
    function storeMem(val) {
        if ((typeof val === "number") && (storeArr[0] === null)) {
            storeArr[0] = val;
        } else if ((typeof val === "number") && (storeArr[1] === null)) {
            storeArr[1] = val;
        } else if (typeof val === "string") {
            storeArr[2] = val;
        }
    }

    // Add numbers and display it on screen
    operatorButton[0].addEventListener("click", function () { storeMem("+") });
    operatorButton[1].addEventListener("click", equal); //equal button

    var result; //private this later

    //This function will be called on by the equal function
    function add(arr) {
        result = arr[0] + arr[1];
    }

    function equal() {
        console.log(storeArr);
        //calScreen.innerHTML = result;
        //If add function not called first, it returns NaN. A lot more if then statements are needed.
        //This function will also be the one that calls new add function
    }

})();