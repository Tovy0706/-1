function range(start, end) {
    let number = [];
    for (let i = start; i <= end; i++) {
        number.push(i);
    }
    return number;
}

let shuzu = range(1, 10);
console.log(shuzu);


function sum(num) {
    let getSum = 0;
    for (let i = 0; i < num.length; i++) {
        getSum += num[i];
    }
    return getSum;
}
let num = [1, 2, 3];
let result = sum(num);
console.log(result);


function range(start, end, buchang) {
    let number = [];
    for (let i = start; i <= end; i += buchang) {
        number.push(i);
    }
    return number;
}

let xiugai = range(1, 10, 2);
console.log(xiugai);