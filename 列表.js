function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}
let arr = [1, 2, 3];
let result = arrayToList(arr);
console.log(result)


function listToArray(list) {
    let array = [];
    for (let currentNode = list; currentNode != null; currentNode = currentNode.rest) {
        array.push(currentNode.value)
    }
    return array;
}
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest:
                null
        }
    }
}


let result2 = listToArray(list);
console.log(result2)



function prepend(element, list) {
    return {
        value: element,
        rest: list
    }
}

let newList = prepend(0, list)
console.log(newList)


function nth(list, num) {
    if (list == null) {
        return undefined
    }
    let node = list;
    for (let i = num; i > 0; i--) {
        node = node.rest;
    }
    return node
}


let num = 1;
let result3 = nth(list, num);
console.log(result3)