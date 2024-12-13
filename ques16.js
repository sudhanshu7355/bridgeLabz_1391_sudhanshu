// Create a function that will return a Boolean specifying if a number is prime


let Boolean=false;
function isprime(num){
    for(let i=2;i<num;i++){
        if(num%i===0){
            Boolean=true;
        }
    }
    if(Boolean==true){
        console.log("not prime");
    }
    else{
        console.log("prime");
    }
}

isprime(7);
