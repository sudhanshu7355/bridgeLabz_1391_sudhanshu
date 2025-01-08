// change the text content of paragraph element 

// let p=document.querySelector("p");
// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     p.textContent="hey! hello";
// })


// swap two images on button click

// let img1=document.querySelector("#img1");
// let img2=document.querySelector("#img2");
// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     let src1=img1.src;
//     let src2=img2.src;
//     img1.src=src2;
//     img2.src=src1;
// })

let form=document.querySelector("form");
let inp1=document.querySelector("#inp1");
let inp2=document.querySelector("#inp2");

let h4=document.querySelector("h4");




form.addEventListener("submit",function(ev){
    ev.preventDefault();
    if(inp1.value=== '' || inp2.value=== ''){
        h4.textContent="some fields are empty";
        h4.style.color="red";

    }
    else{
        h4.textContent="";
        h4.style.color="red";
    }

})
