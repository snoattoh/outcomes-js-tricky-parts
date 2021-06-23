function curriedAdd(total) {
    if(!(total ** 2)) return 0;
    return function adder(num){
        if(!(num ** 2)){
            return total
        }else{
            total += num;
            return adder;
        }
    };
}

module.exports = { curriedAdd };
