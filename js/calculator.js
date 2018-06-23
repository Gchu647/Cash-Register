(function () {
    function testFunction(num) {
        var val = num;
        console.log(val);
    }

    var numberButton = document.getElementsByClassName("numbers");

    for (let i = 0; i < numberButton.length; i++) {
        numberButton[i].addEventListener("click", function () { testFunction(i) });
    }
})();