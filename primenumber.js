var range = 50;
for (var number = 2; number <= range; number++) {
    var isPrime = true;
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number);
    }
}
