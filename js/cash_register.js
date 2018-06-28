(function () {

    // Made deposit, withdraw, and balance buttons
    var accountButtons = document.getElementsByClassName("accounts");
    accountButtons[0].addEventListener("click", clearScreen);
    accountButtons[2].addEventListener("click", depositCash);
    accountButtons[3].addEventListener("click", withdrawCash);
    accountButtons[1].addEventListener("click", balanceCash);

    // Deposit the number on the screen
    function depositCash() {
        var num = parseFloat(document.getElementById("calScreen").innerHTML);
        accountModule.desposit(num);
    }

    // Withdraw the number on the screen
    function withdrawCash() {
        var num = parseFloat(document.getElementById("calScreen").innerHTML);
        accountModule.widthdraw(num);
    }

    // Shows balance
    function balanceCash() {
        var cash = accountModule.balance();
        calScreen.innerHTML = "Balance: $" + cash;
    }

    function clearScreen() {
        calScreen.innerHTML = 0;
    }

    // This module keeps tracks of the memory in the balance
    var accountModule = (function () {
        var memory = 0;
        var total = 0;

        // This used to be called up be calculator js equal function
        var load = function (num) {
            total = num;
        }

        var desposit = function (num) {
            memory += num;
            // console.log("deposited " + memory);
        }

        var widthdraw = function (num) {
            memory -= num;
            // console.log("withdraw" + memory);
        }

        var balance = function () {
            console.log("This is balance" + memory);
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