function createAccount(pin, amount=0) {
    return new Account(pin, amount);;
}

class Account {
    constructor(pin, amount){
        this.pin = pin;
        this.amount = amount;
    }

    checkPin(pin){
        return this.pin === pin;
    }

    checkBalance(pin){
        if(!this.checkPin(pin)){
            return "Invalid PIN.";      
        }else{
            return "$"+this.amount;
        }
    }
    
    deposit(pin, amount){
        if(!this.checkPin(pin)){
            return "Invalid PIN.";        
        }else{
            this.amount = this.amount + amount;
            return `Succesfully deposited $${amount}. Current balance: $${this.amount}.`;
        }
    }

    withdraw(pin, amount){
        if(!this.checkPin(pin)){
            return "Invalid PIN.";        
        }else{
            if(amount <= this.amount){
                this.amount = this.amount - amount;
                return `Succesfully withdrew $${amount}. Current balance: $${this.amount}.`;
            }else{
                return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
            }
        }
    }

    changePin(oldPin, newPin){
        if(!this.checkPin(oldPin)){
            return "Invalid PIN.";  
        }else{
            this.pin = newPin;
            return "PIN successfully changed!"
        }

    }
}



module.exports = { createAccount };
