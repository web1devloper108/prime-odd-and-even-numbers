const range: number = 50;
for (let number = 2; number <= range; number++) {
    let isPrime:boolean = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number);
    }
} 