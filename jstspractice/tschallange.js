{
    var transactions_1 = [];
    var balance = 0;
    var addTransaction = function () {
        console.log('HHHHHHHHHHH');
        var docElement = document.getElementById('Descriptiosn');
        var docAmount = document.getElementById('Amount');
        var transaction = { description: docElement.value, amount: +docAmount.value, date: new Date() };
        transactions_1.push(transaction);
        console.log(transactions_1);
        update_1(transactions_1);
        //  updateBalence(transactions);
        var balanceElement = document.getElementById('Balance');
        balanceElement.innerText = transactions_1.reduce(function (total, transaction) { return total + transaction.amount; }, 0).toString();
    };
    var update_1 = function (transactions) {
        var divElement = document.getElementById('Transactions');
        var list = transactions.map(function (transaction) {
            return ("<li>".concat(transaction.date, " ").concat(transaction.description, " ").concat(transaction.amount, "</li>"));
        });
        divElement.innerHTML = "<ul>" + list.join('') + "</ul>";
    };
    function updateBalence(transactions) {
        var divElement = document.getElementById('Transactions');
        var list = transactions.map(function (transaction) {
            return ("<li>".concat(transaction.date, " ").concat(transaction.description, " ").concat(transaction.amount, "</li>"));
        });
        divElement.innerHTML = "<ul>" + list.join('') + "</ul>";
    }
}
