let text=" ";
for(let i=0;i<10;i++){
    if(i==3){break;}
    text+="num"+i+"<br>";
}
document.getElementById("demo").innerHTML=text;
function myfunction( total,value){
return total+value;
}
const p=Date.parse("JANUARY, 25, 2015");
document.getElementById("demo8").innerHTML = p;
function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo77").innerHTML = text;
  }
  document.getElementById("demo12").innerHTML="scren"+window.history;
  function vaildform(){
    let x=document.forms["myform"]["fname"].value;
    if(x==""){
        alert("must be name");
        return false;
    }
  }