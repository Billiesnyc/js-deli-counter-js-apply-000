var ticketNumber = 0;
var takeANumber = function(katzDeliLine){
  
  ticketNumber++;
  katzDeliLine.push(ticketNumber)
  return "Your ticket number is " + ticketNumber;
  }
var array = []
console.log(takeANumber(array))
console.log(takeANumber(array))

var nowServing = function(katzDeliLine, name){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else { 
    var currently = katzDeliLine.shift();
    return "Currently serving " + currently +".";
      }
 }
 
 var currentLine = function(katzDeliLine){
   if (katzDeliLine.length === 0){
     return "The line is currently empty.";
   }
   else {
     var lineClone = [];
     for (var i = 0; i < katzDeliLine.length; i++){
         lineClone.push((i + 1) + ". " + katzDeliLine[i]);
     }
     var result = lineClone.join(", ");
    return "The line is currently: " + result;
   }
 }