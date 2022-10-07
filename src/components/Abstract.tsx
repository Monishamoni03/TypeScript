abstract class Bank {
    abstract getInterest();
}

class SBI extends Bank {
    getInterest() {
        return 3.7;
    }
}

class IC extends Bank {
    getInterest() {
        return 5.9;
    }
}

let sbi: Bank = new SBI();
console.log(sbi.getInterest());

let ic: Bank = new IC();
console.log(ic.getInterest());