var count = 0;

var factList = [
  "Only 12% of eWaste is recycled.",
  "Around 34,000 pieces of space junk larger than 10 cm orbit the Earth.",
  "The amount of eWaste the world produces anually is about 4,000 Eiffel Towers.",
  "To make single a computer and monitor, it takes 530lbs of fossil fuels, 1.5 tons of water, and 40lbs of chemicals."];

var fact= document.getElementById("factButton");
var myButton = document.getElementById("factButton");

myButton.addEventListener('click', displayFact);

function displayFact (){
  fact.innerHTML = factList[count];
  count++;


   if (count == factList.length){
     count = 0;
  
   }
}