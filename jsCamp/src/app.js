function isPrime(number) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            

            return false 

        }console.log(i)
        return true
    }


    
    
    
}
//isPrime(50)
function findPrime(...numbers) {

    for (let i = 0; i < numbers.length; i++) {
        if(isPrime(numbers[i])){
            console.log("sayı asal: "+numbers[i])

        }else{
            console.log("sayı asal değildir: "+numbers[i])
        }
        
    }
}
//findPrime(70, 7)

function friendsNumber(number1, number2) {
    let divisorsOfNumberOne = 0;
    let divisorsOfNumberTwo = 0;

    for (let i = 0; i < number1; i++) {
        if (number1 % i ==0) {
            divisorsOfNumberOne = divisorsOfNumberOne+i
        }
    }

    for (let i = 0; i < number2; i++) {
        if (number2 % i ==0) {
            divisorsOfNumberTwo = divisorsOfNumberTwo+i
        }
    }

    if (divisorsOfNumberOne == number2 && divisorsOfNumberTwo == number1) {
        console.log(number1+" ve " +number2+" arkadaş sayılardır!")
    }else{
        console.log(number1+" ve " +number2+" arkadaş sayılar değillerdir!")
    }


    
}

friendsNumber(220, 284)

function isPerfectNumber(number) {
    let sayac = 0;
    for (let i = 0; i < number; i++) {
        if(number % i == 0){
            sayac = sayac + i
console.log(i)
        }
        //console.log(sayac)
    }

    if(sayac == number){
        console.log("sayı mükemmel sayıdır: "+ number)
    }else{
        console.log("sayı mükemmel sayı değildir: "+ number)

    }

}

//isPerfectNumber(6)

function PerfectNumbersList() {
    for (let i = 0; i < 1000; i++) {
        if (isPerfectNumber(i)) {
            console.log(i)
            
        }        
    }
    
}
//PerfectNumbersList()

function primeNumbers() {
    for (let i = 2; i < 1000; i++) {
        if (isPrime(i)) {
           console.log(i)
        }
    }
}
//primeNumbers();
