(function () {

    //create buttons for numbers and operators
    var numberButton = document.getElementsByClassName("numbers");
    var operatorButton = document.getElementsByClassName("operators");

    // need to add more number event listeners here
    for (let i = 0; i < numberButton.length; i++) {
        numberButton[i].addEventListener("click", function () { numOnScreen(i) });
        numberButton[i].addEventListener("click", function () { storeMem(i) });
    }

    // prints number value on screen
    function numOnScreen(num) {
        calScreen.innerHTML = num;
    }

    // store two values in an array
    var storeArr = [];

    function storeMem(num) {
        storeArr.push(num);
    }

    // Add numbers and display it on screen
    operatorButton[0].addEventListener("click", function () { add(storeArr); });
    operatorButton[1].addEventListener("click", equal); //equal button

    var result; //private this later

    function add(arr) {
        result = arr[0] + arr[1];
    }

    function equal() {
        console.log(storeArr);
        calScreen.innerHTML = result;
        //if it is not added first, it returns undefined
    }

})();