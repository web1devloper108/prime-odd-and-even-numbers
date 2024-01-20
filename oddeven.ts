var limit = 50;
function evenOdd(limit) {
    console.log("The even numbers are");
    for (var i = 1; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    console.log("The odd numbers are");
    for (var i = 1; i <= limit; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
evenOdd(limit);
