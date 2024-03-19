var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
{
    var age = 20;
    // age ="twenty";
    console.log(age);
    var incrementAge = function (age) {
        return age + 1;
    };
    var printAge = function (age) {
        console.log(age);
    };
    printAge(20);
    var incremented = incrementAge(25);
    console.log(incremented);
    var roomname = void 0;
    roomname = 123;
    roomname = "ABC 123";
    var dhoniage = 42;
    console.log(incrementAge(dhoniage));
    // export {}
    dhoniage = null;
    console.log(incrementAge(dhoniage !== null && dhoniage !== void 0 ? dhoniage : 40));
    var incrementAge2 = function (age) {
        var _a;
        return (_a = age + 1) !== null && _a !== void 0 ? _a : 21;
    };
    var incrementAge3 = function (age) {
        return age !== null && age !== void 0 ? age : 21;
    };
    var incrementAge4 = function (age) {
        if (age === void 0) { age = 21; }
        return age;
    };
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.active = false;
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var Person1 = /** @class */ (function () {
        function Person1(name, age) {
            this._changed = false;
            this.name = name;
            this.age = age;
        }
        Object.defineProperty(Person1.prototype, "changed", {
            get: function () {
                return this._changed;
            },
            set: function (value) {
                this._changed = value;
            },
            enumerable: false,
            configurable: true
        });
        return Person1;
    }());
    var person3 = new Person1("ranbir", 37);
    console.log(person3._changed);
    person3.changed = true;
    console.log(person3.changed);
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child(name, toys, age) {
            var _this = _super.call(this, name, age) || this;
            _this.toys = toys;
            return _this;
        }
        return Child;
    }(Person1));
    var child1 = new Child("vinod", ["car", "star"], 5);
    console.log(child1);
    var person1 = new Person('vinod', 43);
    var person2 = new Person('Vandan');
    console.log(person1, person2);
    var CheckBalance = /** @class */ (function () {
        function CheckBalance(id, balance, transactions) {
            this.id = id;
            this.balance = balance;
            this.transactions = transactions;
            this.id = id;
            this.balance = balance;
            this.transactions = transactions;
        }
        CheckBalance.prototype.addBalance = function (newValue) {
            this.balance = this.balance + newValue;
        };
        return CheckBalance;
    }());
    var accout = { id: 30, balance: 2020, transactions: [100, 200], addBalance: function (newValue) {
            this.balance = this.balance + newValue;
        } };
    var transactions1 = { date: new Date(), amount: 1000, description: "Deposite1" };
    var EnhancedTransaction = /** @class */ (function () {
        function EnhancedTransaction(date, amount, description) {
            this.date = date;
            this.amount = amount;
            this.description = description;
        }
        return EnhancedTransaction;
    }());
    //COmbining types
    var x = void 0;
    var s1 = { name: "vinod", role: 3, id: 24 };
    // Genrics
    function convertNumberToArray(x, y) {
        return [x, y];
    }
    var result = convertNumberToArray(10, 20);
    console.log(result);
    function convertToArray(x, y) {
        return [x, y];
    }
    var result1 = convertToArray(10, 20);
    console.log(result1);
    var result2 = convertToArray('Ten', "Twenty");
    console.log(result2);
    var AccountManager = /** @class */ (function () {
        function AccountManager(account) {
            this.accont = account;
        }
        return AccountManager;
    }());
    var checkingAccount = new AccountManager(new CheckBalance(1, 100, [100, 200]));
    console.log(checkingAccount);
    ;
    var ttype = 0 /* TransactionType.Deposit */;
    console.log(ttype + ' ' + 1 /* TransactionType.Withdrawal */);
    ;
    var ttype2 = "D" /* TransactionType2.Deposit */;
    console.log(ttype2);
    var user = { name: 'vinod', active: false };
    console.log(((_a = user.password) === null || _a === void 0 ? void 0 : _a.length) || 'no password');
}
