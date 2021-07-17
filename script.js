
        //Login button
        const loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function (e) {

            const loginArea = document.getElementById("login-area");
            // loginArea.remove();
            loginArea.style.display = "none";

            const transactionArea = document.getElementById("transaction-area");
            transactionArea.style.display = "block"
        })

        //deposit
        const addDeposit = document.getElementById("add-deposit")
        addDeposit.addEventListener("click", function () {

            const depositNumber = getInputValue('deposit-amount');

            // const depositAmount = document.getElementById("deposit-amount").value;
            // const depositNumber = parseFloat(depositAmount);
            // console.log(typeof depositNumber);

            // const currentDeposit = document.getElementById("current-deposit").innerText;
            // const currentDepositNumber = parseFloat(currentDeposit);
            // console.log(typeof currentDepositNumber);

            // const updatedDeposit = currentDepositNumber + depositNumber;
            // document.getElementById("current-deposit").innerText = updatedDeposit;


            updateAmount('current-deposit', depositNumber);

            updateAmount('current-balance', depositNumber);

            document.getElementById("deposit-amount").value = "";

        })

        //Withdraw

        const addWithdraw = document.getElementById('add-withdraw');
        addWithdraw.addEventListener('click', function (e) {

            const withdrawAmount = getInputValue('withdraw-amount');

            updateAmount('current-withdraw', withdrawAmount);
            updateAmount('current-balance', withdrawAmount * -1);

            document.getElementById('withdraw-amount').value = "";

        })

        //get input value

        function getInputValue(id) {
            const amount = document.getElementById(id).value;
            const amountNumber = parseFloat(amount);
            return amountNumber;

        }


        //Update Amount

        function updateAmount(id, inputNumber) {

            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);

            const newAmount = currentNumber + inputNumber;
            document.getElementById(id).innerText = newAmount;

        }