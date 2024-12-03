//check if a year is leap or not
let leap_year=2004;
if((leap_year%4== 0 && leap_year%100!=0) || (leap_year%400== 0)){
    console.log("year is leap");

}
else{
    console.log("year is not leap");
}