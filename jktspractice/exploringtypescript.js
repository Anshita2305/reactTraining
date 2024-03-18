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
{
    var ag_1 = 20;
    //age='23';
    var coder = 'Anshita';
    var incrementAge = function (age) {
        return ag_1 + 1;
    };
    var printAge = function (age) {
        console.log(age);
    };
    printAge(ag_1);
    var ageNumber = incrementAge(ag_1);
    printAge(ageNumber);
    var roomname = void 0;
    roomname = 801;
    roomname = 'C8.A';
    var dhoniage = void 0;
    dhoniage = 54;
    incrementAge(dhoniage);
    dhoniage = null;
    if (dhoniage != null) {
        incrementAge(dhoniage);
    }
    else {
        incrementAge(1);
    }
    incrementAge(dhoniage !== null && dhoniage !== void 0 ? dhoniage : 1);
    incrementAge(dhoniage);
    //optional parameter
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
            this.name = name;
            this.age = age;
            //name : string;
            //age?: number;
            this.active = false;
            // this.name = name;
            // this.age = age;
            //   this.active = active;
        }
        Person.prototype.celebrateBirthday = function () {
            if (this.age !== undefined) {
                this.age++;
                this.name = 'Ranbir';
            }
        };
        return Person;
    }());
    var person1 = new Person('virat', 43);
    var person2 = new Person('anushka');
    console.log(person1);
    person2.celebrateBirthday();
    console.log(person2);
    var person3 = new Person('Ranbir', 37);
    console.log(person3);
    var Person1 = /** @class */ (function () {
        function Person1(name, age) {
            this.active = false;
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
        Person1.prototype.celebrateBirthday = function () {
            if (this.age !== undefined) {
                this.age++;
                this.name = 'Ranbir';
            }
        };
        return Person1;
    }());
    var person4 = new Person1('Anshita', 23);
    console.log(person4.changed);
    person4.changed = true;
    console.log(person4.changed);
    //inheritance
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child(name, toys, age) {
            var _this = _super.call(this, name, age) || this;
            _this.toys = toys;
            return _this;
        }
        return Child;
    }(Person1));
    var child1 = new Child('Tommy', ["car", "star parents"], 5);
    console.log(child1);
    var CheckingAccount = /** @class */ (function () {
        function CheckingAccount(id, balance, transactions) {
            this.id = id;
            this.balance = balance;
            this.transactions = transactions;
        }
        CheckingAccount.prototype.addBalance = function (newValue) {
            this.balance += newValue;
        };
        return CheckingAccount;
    }());
    var account = { id: 34, balance: 8000, transactions: [100, 200], addBalance: function (newValue) {
            this.balance += newValue;
        } };
    console.log(account);
    account.addBalance(400);
    console.log(account);
    var transactions = { date: new Date(), amount: 1000, description: "Deposit" };
    var EnhancedTransaction = /** @class */ (function () {
        function EnhancedTransaction(date, amount, description) {
            this.date = date;
            this.amount = amount;
            this.description = description;
        }
        return EnhancedTransaction;
    }());
    // combining types
    var x = void 0;
    var s1 = { name: "abc", role: "teacher", id: 1, salary: 200000 };
    var t1 = 23;
    var t2 = true;
    //let t3: type3 ="abc";
}
