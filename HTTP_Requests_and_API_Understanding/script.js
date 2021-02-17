$(document).ready(function() {
  $.getJSON("https://api.quotable.io/random", function(data){
    $('#quoteText').text(data.content);
    $('#authorText').text('- ' + data.author);
  });
});

$("button").click(function(){
  $.getJSON("https://api.quotable.io/random", function(data){
    $('#quoteText').text(data.content);
    $('#authorText').text('- ' + data.author);
  });
});
