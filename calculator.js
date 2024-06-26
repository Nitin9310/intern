let input=document.getElementById("inputbox");
let buttons=Array.from(document.querySelectorAll("button"));
//array.from we make an array of buttons

let string="";//here we store the input 
buttons.forEach(button=>{//here we traverse the every button present in array
button.addEventListener("click",(evt)=>{
    if(evt.target.textContent==="="){
        string=eval(string);
        input.value=string;
    }
    else if(evt.target.innerHTML=="AC"){
        string="";
        input.value=string;
    }else if(evt.target.innerHTML=="DEL"){
        string=string.slice(0,-1);
        input.value=string;
    }else{
        string+=evt.target.innerHTML;
    input.value=string;
    }

})
})