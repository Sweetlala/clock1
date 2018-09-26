
var myVar = setInterval(myTimer,1000);
function myTimer(){
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
/*-calculeter---*/
function displaynum(n1) {
    calcform.text1.value =calcform.text1.value + n1;
}

/*----clear-----*/ 
function myFunction() {
    calcform.text1.value = "";
  }
  