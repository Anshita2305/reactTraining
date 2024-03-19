{
    var transactions_1 = [];
    var total = 0;
    var addTransaction = function () {
        var description = document.getElementById('description');
        var amount = document.getElementById('amount');
        var newTransaction = {
            description: description.value,
            amount: +amount.value,
            date: new Date()
        };
        transactions_1.push(newTransaction);
        console.log(transactions_1);
        updateDisplay_1();
    };
    var updateDisplay_1 = function () {
        var description = document.getElementById('description');
        var amount = document.getElementById('amount');
        var balance = document.getElementById('balance');
        var transactionList = document.getElementById('transactions');
        var lis = transactions_1.map(function (transaction) { return ("<li>".concat(transaction.date, " ").concat(transaction.description, " ").concat(transaction.amount, "</li>")); });
        transactionList.innerHTML = "<ul>" + lis.join('') + "</ul>";
        description.value = "";
        amount.value = "";
        balance.innerText = transactions_1.reduce(function (total, transaction) { return total + transaction.amount; }, 0).toString();
    };
}
