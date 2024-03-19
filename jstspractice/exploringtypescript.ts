{
let age:number = 20

// age ="twenty";
console.log(age);

const incrementAge = (age:number):number => {
    return age+1;
}

const printAge = (age:number):void => {
    console.log(age);

}



printAge(20);
let incremented:number = incrementAge(25);
console.log(incremented);


let roomname: number | string;
roomname = 123
roomname ="ABC 123"

let dhoniage : number | null =42;

console.log(incrementAge(dhoniage));
// export {}

dhoniage = null;
console.log(incrementAge(dhoniage ?? 40));

const incrementAge2 = (age :number | null ) => {
    return age!+1 ?? 21;
}


const incrementAge3 = (age?:number) => {
    return age ?? 21;
}


const incrementAge4 = (age:number=21) => {
    return age;
}

class Person {
    name : string;
    age?:number;
    active:boolean = false;

    constructor(name:string, age?:number){
        this.name= name;
        this.age = age;
    }
}

class Person1 {
    name : string;
    age?:number;
    _changed:boolean = false;

    constructor(name:string, age?:number){
        this.name= name;
        this.age = age;
    }

    public get changed():boolean{
        return this._changed;
    }
    public set changed(value:boolean){
        this._changed=value;
    }
}

const person3 = new Person1("ranbir",37);
console.log(person3._changed)

person3.changed=true;
console.log(person3.changed);

class Child extends Person1{
    toys:string[];

    constructor(name:string,toys:string[],age?:number){
super(name,age);
this.toys= toys;
    }
}

let child1 = new Child("vinod",["car","star"],5);
console.log(child1);

const  person1 = new Person('vinod',43);
const person2 = new Person('Vandan');

console.log(person1,person2);


//Interface

interface Account{
    id:number;
    balance:number;
    transactions:number[];
    addBalance(newValue:number):void;

}

class CheckBalance implements Account{
    constructor(public id:number,public balance:number, public transactions:number[]){
        this.id= id;this.balance=balance;this.transactions=transactions;
    }

    addBalance(newValue: number): void {
        this.balance= this.balance+newValue;
    }
}


let accout:Account= {id:30,balance:2020, transactions: [100,200],addBalance(newValue:number) {
    this.balance= this.balance+newValue;
}};

type Transactions ={
date :Date;
amount:number;
description:string;
}

const transactions1 : Transactions ={date: new Date(), amount:1000,description:"Deposite1"};


class EnhancedTransaction implements Transactions {

    constructor(public date:Date, public amount:number,public description :string){

    }
}

//COmbining types

let x :number|String

type Teacher = {name:string,role:number}
type Employee = {id:number,name:string}

type SchoolEmp = Teacher & Employee

let s1:SchoolEmp = {name:"vinod",role:3,id:24};

//

type type1 = string|number| boolean;
type type2 = Teacher|number| boolean;
type type3 = type1 & type2;

// Genrics
function convertNumberToArray(x:number,y:number):number[]{
return [x,y];
}

let result = convertNumberToArray(10,20);
console.log(result);

function convertToArray<Type>(x:Type,y:Type):Type[]{
    return [x,y];
    }
    
    let result1 = convertToArray<number>(10,20);
    console.log(result1);
    

    let result2 = convertToArray('Ten',"Twenty");
    console.log(result2);
    
class AccountManager<T>{
accont:T;
constructor(account:T){
    this.accont=account;
}
}

let checkingAccount = new AccountManager<CheckBalance>(new CheckBalance(1,100,[100,200]));

console.log(checkingAccount);

const enum TransactionType{Deposit,Withdrawal,Transfer};

const ttype:TransactionType = TransactionType.Deposit;
console.log(ttype +' ' + TransactionType.Withdrawal);

const enum TransactionType2{Deposit='D',Withdrawal='W',Transfer='T'};
const ttype2:TransactionType2= TransactionType2.Deposit;
console.log(ttype2);

type User = {name : string, password? :string, active : boolean};

const user:User = {name:'vinod',active:false};
console.log(user.password?.length ||'no password' )

// const description = document.getElementById('as') as HTMLInputElement;
// description.value;




}