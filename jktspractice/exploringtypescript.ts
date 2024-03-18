{
    let ag:number = 20;
//age='23';
let coder:string = 'Anshita';

const incrementAge = (age:number | undefined):number => {
    return ag+1;
}

const printAge = (age:number):void => {
    console.log(age);
}

printAge(ag);

let ageNumber = incrementAge(ag);

printAge(ageNumber);

let roomname:number | string;
roomname = 801;
roomname  = 'C8.A';

let dhoniage:number | null;
dhoniage = 54;
incrementAge(dhoniage);

dhoniage = null;
if(dhoniage!=null){
incrementAge(dhoniage);
}
else{
    incrementAge(1);
}
incrementAge(dhoniage ?? 1);

incrementAge(dhoniage!);

//optional parameter
const incrementAge2 = (age:number|null):number => {
    return age!+1 ?? 21 ;
}

const incrementAge3 = (age?:number) : number => {
    return age ?? 21;
}

const incrementAge4 = (age:number=21) : number => {
    return age;
}

class Person {
    //name : string;
    //age?: number;
    active : boolean =false;

    constructor(public name: string, public age?: number){
       // this.name = name;
       // this.age = age;
     //   this.active = active;
    }

    celebrateBirthday():void {
        if(this.age !== undefined){
        this.age++;
        this.name = 'Ranbir';
        }
    }



}

const person1 = new Person('virat',43);
const person2 = new Person('anushka');

console.log(person1);
person2.celebrateBirthday();
console.log(person2);

const person3 = new Person('Ranbir',37);
console.log(person3);

class Person1 {
    name : string;
    age?: number;
    active : boolean =false;
    private _changed:boolean = false;

    constructor(name: string, age?: number){
        this.name = name;
        this.age = age;
    }

    public get changed():boolean{
        return this._changed;
    }

    public set changed(value:boolean){
        this._changed = value;
    }

    celebrateBirthday():void {
        if(this.age !== undefined){
        this.age++;
        this.name = 'Ranbir';
        }
    }
}
    const person4 = new Person1('Anshita',23);

    console.log(person4.changed);
    person4.changed = true;
    console.log(person4.changed);

    //inheritance

    class Child extends Person1 {
        toys : string[];

        constructor(name: string, toys:string[],age?:number){
            super(name,age);
            this.toys = toys;
        }
    }

    let child1 = new Child('Tommy',["car","star parents"],5);
    console.log(child1);

    //interfaces
    interface Account {
        id: number;
        balance: number;
        transactions:number[];
        addBalance(newValue:number) : void;
    }

    class CheckingAccount implements Account {
        
        constructor(public id:number,public balance:number,public transactions:number[]){
            
        }

        public addBalance(newValue:number):void{
            this.balance+=newValue;
        }
    }

    let account:Account={id:34,balance:8000,transactions:[100,200],addBalance(newValue:number){
        this.balance+=newValue;
    }};

    console.log(account);
    account.addBalance(400);
    console.log(account);
    
    //type
    type Transaction = {
        date : Date;
        amount : number;
        description : string;
    }

    const transactions:Transaction = {date:new Date(), amount:1000, description:"Deposit"};

    class EnhancedTransaction implements Transaction {
        constructor(public date:Date, public amount:number,public description:string){}
    }

    // combining types

    let x: number|string;

    type Teacher = {name : string, role:string}
    type Employee = {id:number, salary:number}

    type SchoolEmployee = Teacher & Employee;

    let s1:SchoolEmployee = {name:"abc",role:"teacher",id:1,salary:200000}
    
    //warning
    type type1 = string | number |boolean;
    type type2 = Teacher | number | boolean;

    type type3 = type1 & type2;
    let t1: type3 = 23;
    let t2: type3 = true;
    //let t3: type3 ="abc";
    


}