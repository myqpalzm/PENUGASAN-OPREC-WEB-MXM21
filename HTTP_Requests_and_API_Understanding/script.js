$(document).ready(function() {
  $.getJSON("https://api.quotable.io/random", function(data) {
    $('#quoteText').text('"' + data.content + '"');
    $('#authorText').text('- ' + data.author);
  });
});

$(".quoteBtn").click(function() {
  $.getJSON("https://api.quotable.io/random", function(data) {
    $('#quoteText').text('"' + data.content + '"');
    $('#authorText').text('- ' + data.author);
  });
});

$(".tweetBtn").click(function() {
  let quote = $('#quoteText').text();
  let author = $('#authorText').text();
  let newTab = window.open('https://twitter.com/intent/tweet?text="' + quote + '"%0A%0A' + author, '_blank')
  //alert('"' + quote + '" ' + author);
  //$(location).attr('href', 'https://twitter.com/intent/tweet?text="' + quote + '" ' + author);
  newTab.focus();
});
