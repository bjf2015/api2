//console.log('First Application Programming Interface');
$(function(){
    
    /*This grabs the value the User is looking for and 
    also prevents the default event of the Form*/
    $('#search-term').submit(function(event){
      event.preventDefault();
      var queryValue = $('#query').val();
      getRequest(queryValue);
      $('#query').val("");
    });
});

  /*Function to GET the data from the third party Server*/
  function getRequest(searchedTitle){
    var params = {
      q: searchedTitle,
      part: 'snippet',
      key: 'AIzaSyDTv6VN6qEAQvF-L00eMR3MZAENYB5nOlc'
    };
    url = 'https://www.googleapis.com/youtube/v3/search';
    $.getJSON(url, params, function(responseData) {
        console.log(responseData);
         var mySearch = responseData;
         showResults(mySearch.items);
      });
  };

  /*Function to Render/Show the specific Data we are looking for*/
  thePropertyToShow = {};
  function showResults(thePropertyToShow){
    var thumbnail = "";
    $.each(thePropertyToShow, function(index, value){
    var videoUrl = "https://www.youtube.com/watch?v=" + value.id.videoId;
     thumbnail += '<a href='+videoUrl+'><img src='+ value.snippet.thumbnails.medium.url +'></a>'  + '<br>';
    });
    // console.log(thumbnail)
    $('#search-results').html('');
    $('#search-results').append(thumbnail);
  };