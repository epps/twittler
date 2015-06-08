$(document).ready(function(){

  // var $body = $('body');
  // $body.html('<button>More tweets</button>');
  var tweetCounter = 12,
      nextTweet = streams.home[tweetCounter];

  var index = streams.home.length -1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweet"><a href="#" class="' + tweet.user + '">@' + tweet.user + '</a>: ' + tweet.message + ' <abbr class="timeago" title="' + tweet.created_at.toISOString() + '"></abbr></div>');
    $tweet.appendTo('.tweet_container');
    index -= 1;
  }

  /*
  function continuousTweets () {
    var index = streams.home.length -1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"><a href="#" class="' + tweet.user + '">@' + tweet.user + '</a>: ' + tweet.message + '</div>');
      $tweet.appendTo('.tweet_container');
      index -= 1;
    }
  }

  function tweetsInterval () {
    continuousTweets();
    setTimeout(function() {
      tweetsInterval();
    }, Math.random()*10000);
  }

  tweetsInterval();
  */

  $('button').on('click', function() {
    nextTweet = streams.home[tweetCounter];
    $('.tweet').first().before('<div class="tweet"><a href="#" class="' + nextTweet.user + '">@' + nextTweet.user + '</a>: ' + nextTweet.message + ' <abbr class="timeago" title="' + tweet.created_at.toISOString() + '"></abbr></div>');
    tweetCounter++;
    $('abbr.timeago').timeago();
  });

  $('.tweet_container').on('click', 'a', function(e) { // in order to have this click event work for dynamically generated content, you need to target the parent tweet_container
    e.preventDefault();

    var user = $(this).attr('class');
    // $('a').not('.' + user).parent().remove(); Works for only non-dynamically generated elements
    
    $('.tweet_container').find('a').not('.' + user).parent().fadeToggle(450, "linear"); // had to begin my selection that the container level so that the behavior would apply to dynamically generated content, too

    $('button').fadeToggle(250, "linear");
    $('.about_user').text('About @'+user+": "+streams.users[user].bio).delay(400).fadeToggle(250, "linear");


    /*
    $('button').off().on('click', function(){
      var nextUsrTweet = streams.users[user][tweetCounter];
      $('.tweet').first().before('<div class="tweet"><a href="#" class="' + nextUsrTweet.user + '">@' + nextUsrTweet.user + '</a>: ' + nextUsrTweet.message + '</div>');
      tweetCounter++;
    });
    */

  });

  $('abbr.timeago').timeago();

});