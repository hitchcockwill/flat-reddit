removeStylesheets = function() {
  $("link[title='applied_subreddit_stylesheet']").remove();
};

$(document).ready(function(){
  removeStylesheets();

  $("body").animate({"opacity": 1}, 500);
});
