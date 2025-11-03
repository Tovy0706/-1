let y = "Fizz", c = "Buzz";
for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) {
        console.log(y) + (c);
    }

    else if (i % 3 == 0) {
        console.log(y);
    }
    else if (i % 5 == 0) {
        console.log(c);
    }
    else {
        console.log(i);
    }
}