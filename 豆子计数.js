function countBs(num) {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] == "B") {
            count += 1;
        }
    }
    return count;
}

console.log(countBs("BOB"))