
var input = document.getElementById("inputText");
var charCount = document.getElementById("count");

function totalChar(){
    var totalCharacter = input.value.length;
    charCount.innerHTML = `${totalCharacter}`;
    var colorChar = charCount.innerHTML = `${totalCharacter}`;
  if(colorChar >= 10){
    document.getElementById('count').style.color = "#EA2027";
 }
 else{
    document.getElementById('count').style.color = "#fff";
 }
}


totalChar();
