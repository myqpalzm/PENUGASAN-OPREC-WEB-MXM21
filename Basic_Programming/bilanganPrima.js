let answer = 0;
let number = 2;
let counter = 1;

function primeNumber() {
  do {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        } else {
          answer = number;
          counter += 1;
        }
    }
  } while (counter <= 20210)
  console.log(answer);
}

primeNumber();
