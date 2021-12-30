class Car{
    constructor(name,wheels,doors,engine){
        this.name=name;
        this.wheels=wheels;
        this.doors=doors;
        this.engine=engine;
    }
}
const BMW= new Car("BMW X6",4,4,"V6");
const Venue= new Car("Venue",4,4,"V3");
const landcruser= new Car("landcruser",4,5,"V8");
console.log(BMW);
console.log(Venue);
console.log(landcruser);
// Example2 : Bank detail
class Account{
    constructor(name,accountnumber,balance){
        this.name=name;
        this.accountnumber=accountnumber;
        this.balance=balance;
    }
    getBalance(){
        return `The balance is: ₹${this.balance}`;
    }
    withdraw(amount){
        if(this.balance >= amount){
            this.balance=this.balance - amount;
            return this.getBalance();
        }
        else{
            return `Insufficient balance, ${this.getBalance()}`;
        }
    }

    // Task 1 - Deposit :
    deposit(amount){
        this.balance= this.balance + amount;
        return `Amount deposited successfully, ${this.getBalance()}`;
    }
}
const Ram= new Account("Ramkumar",63458972,20_000);
console.log(Ram.getBalance());
console.log(Ram.withdraw(5_000));
console.log(Ram.deposit(10_000));

const getCountries = () => {
    console.log("Getting countries...");
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const data = xhr.response;
        console.log("Full data", data);
        const country=data.map(names=>names.name.common);
        console.log(country);

        //Task 2 - Find all countries that speak spanish
        const language=data.map(lang=>lang.languages);
        console.log(language);
        // const pass=data.filter((lang)=>(lang.languages===languges.spa));
        // console.log(pass);

        // Task 3 - Find all countries names with more than 1_00_00_000 population
        const ispass=data.filter((num)=>(num.population>=1_00_00_000));
        console.log(ispass);
        const population=ispass.map(lang=>lang.name.common);
        console.log(population);
    };
    // console.log(data.map(names=>names.name));
};
getCountries();