//Stampa numeri da 1 a 100, per i multipli di 3 stampa Fizz, per i multipli di 5 stampa Buzz, per i multipli di 3 e 5 stampa FizzBuzz
for (var i = 1; i < 101; i++){

    if (i % 3 == 0 && i % 5 == 0){
        document.getElementById("nums").innerHTML += "Fizzbuzz <br>";
    } else if (i % 3 == 0){
        document.getElementById("nums").innerHTML += "Fizz <br>";
    } else if (i % 5 == 0) {
        document.getElementById("nums").innerHTML += "Buzz <br>";
    } else {
        document.getElementById("nums").innerHTML += i + "<br>";

    }

}


