document.addEventListener("DOMContentLoaded", function(){
    var text = ["It's not about having lots of MONEY. It's knowing how to manage it",

"FINANCIAL SUCCESS, As well as most success in life, is not about PERFECTION, It's about DIRECTION", "PRICE is what you pay VALUE is what you get"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 5000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
});
