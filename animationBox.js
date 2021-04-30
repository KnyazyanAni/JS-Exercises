/*/////////////Function Random Color//////////////*/
function randColor(){
var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("box").style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
/*/////////////Function Click Counter/////////////*/
var count = 0;
function clickCounter() {
count+=1;
document.getElementById("box").innerHTML = count;
}
/*//////////////////Animation//////////////////////*/
var id = null;
function myMove() {
var elem = document.getElementById("box");
var pos = 0;
clearInterval(id);
id = setInterval(frame, 1);
function frame() {
  if (pos == 400) {
    clearInterval(id);
  } else {
    pos++;
    elem.style.left = pos + 'px';
  }
}
}