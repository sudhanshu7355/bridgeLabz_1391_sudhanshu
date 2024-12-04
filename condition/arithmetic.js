// Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum

// a+b*c 3. c+a/b 2. a%b+c 4. a*b+c
let a=Math.floor(Math.random()*10);
let b=Math.floor(Math.random()*10);
let c=Math.floor(Math.random()*10);

function mul(){
    return a+b*c;
}
function divide(){
    return c+a/b;
}
function mod(){
    return a%b+c;
}
function add(){
    return a*b+c;
}
let ans1=mul();
let ans2=divide();
let ans3=mod();
let ans4=add();
console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);

let max=Math.max(ans1,ans2,ans3,ans4)
console.log(max);
let min=Math.min(ans1,ans2,ans3,ans4)
console.log(min);


