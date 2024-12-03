//check if the date lies between the range of days and month
// const prompt =require("prompt-sync")({sigint:true});
let day=32;
let month=8;
if(month==3 && day>=20 || month>3 && month<6 || month==6 && day<=20){
    console.log("true");
    
}
else{
    console.log("false");
}