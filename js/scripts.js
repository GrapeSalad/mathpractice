$(function(){
  $("form#numberForm").submit(function(event){
    event.preventDefault();

    var numberToFactor = parseInt($("input#userNumber").val());
    console.log("numberToFactor", numberToFactor);
    var numbers = [];
    for (var i = numberToFactor; i >= 1; i -= 1){
      numbers.push(i);
    }
    var factoredNumbers = numbers.map(function(number){
      for(var i = number; i >= 1; i -= 1){
        return i * number;
      }

    });
    console.log("factored numbers: ", factoredNumbers);
  });
});
