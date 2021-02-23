window.onload = function(){

function hexColorGenerator() {
  return '#'+ Math.floor(Math.random()*16777215).toString(16); /* 16777215 is equal to FFFFFF
  && .toString(16) converts the value to base16 (hexadecimal) */
}

  var btn = document.getElementById("clrbtn");
  btn.onclick = function(){
    var randomColor = hexColorGenerator(); //randomColor = hexVal generated by function
    document.body.style.backgroundColor = randomColor; //sets background color = random color
    document.getElementById("hextext").innerHTML = "Hex Value: " + randomColor; /* Displays the current color's
    hex value in the hextext h1. */
  };
}
