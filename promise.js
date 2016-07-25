'use strict';

const myPromise = function(func) {
    let promiseArr = [];

    promiseArr.push(func);

    this.then = function(func) {
        promiseArr.push(func);
        return this;
    };

    this.finally = function() {
        promiseArr.forEach(function(func){
            return func();
        });
    };
};

let function1 = () => {
    console.log('called func1');
}

let function2 = () => {
    console.log('called func2');
}

let function3 = () => {
    console.log('called func3');
}

let newPromise = new myPromise(function1);
newPromise.then(function2).then(function3).finally();
