$(document).ready(function(){
  
  // var $body = $('body');
  // $body.html('<button>More tweets</button>');
  var tweetCounter = 12,
      nextTweet = streams.home[tweetCounter];

  var index = streams.home.length -1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweet"></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.appendTo('.container');
    index -= 1;
  }

  // $('button').on('click', function() {
  //     nextTweet = streams.home[tweetCounter];
  //     $tweet.text('@' + nextTweet.user + ': ' + nextTweet.message);
  //     $('.tweet').first().before($tweet);
  //     tweetCounter++;
  // });

  $('button').on('click', function() {
    nextTweet = streams.home[tweetCounter];
    $('.tweet').first().before('<div class="tweet">@' + nextTweet.user + ': ' + nextTweet.message + '</div>');
    tweetCounter++;
  });

});