var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
  'api-key': "265f026b65194d00be94c6cbcd2f785c"
});
$.ajax({
  url: queryURL,
  method: 'GET',
}).then(function(result) {
  console.log(result);
  var search = $("#search-term").val().trim();
  console.log(search);
})