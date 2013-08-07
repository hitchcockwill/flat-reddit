(function() {

  var removeStylesheets = function() {
    $("link[title='applied_subreddit_stylesheet']").remove();
  };

  var cleanUpRES = function() {
    var $commentBoxes = $(".res-commentBoxes");
    console.log($commentBoxes)
    if ($commentBoxes.length > 0) {
      $commentBoxes.removeClass(".res-commentBoxes");
    }
    console.log($(".res-commentBoxes"))
  }

  $(document).ready(function(){
    console.log("got calleld")
    removeStylesheets();
    // cleanUpRES();

    // setTimeout(cleanUpRES, 1000);

    $("body").animate({"opacity": 1}, 500);

  });

})();