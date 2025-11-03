let size = 8, c = "#", h = " ";
for (let x = 0; x < size; x++) {
    let t = "";
    for (let y = 0; y < size; y++) {
        if ((x + y) % 2 === 0) {
            t += c;
        } else {
            t += h;
        }
    }
    console.log(t);
}
