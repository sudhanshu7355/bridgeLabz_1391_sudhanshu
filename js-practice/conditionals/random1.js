// take 3 digit 5 random values and check which is larger or smaller
let arr = [Math.floor(Math.random() * 900) + 100, 
    Math.floor(Math.random() * 900) + 100,
     Math.floor(Math.random() * 900) + 100, 
     Math.floor(Math.random() * 900) + 100,
     Math.floor(Math.random()*900)+100,];
     console.log(arr);
     let max=arr[0];
     let min=arr[0];
     for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
         if(arr[i]<min){
            min=arr[i];
        }
     }
     console.log(min);
     console.log(max);



