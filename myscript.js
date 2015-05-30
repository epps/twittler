$(document).ready(function(){
  
  // var $body = $('body');
  // $body.html('<button>More tweets</button>');
  var tweetCounter = 12,
      nextTweet = streams.home[tweetCounter];

  var index = streams.home.length -1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweet"><a href="#" data-user="' + tweet.user + '">@' + tweet.user + '</a>: ' + tweet.message + '</div>');
    $tweet.appendTo('.container');
    if (tweet.user === 'shawndrost') {
      $tweet.appendTo('.shawndrost');
    }
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
    $('.tweet').first().before('<div class="tweet"><a href="#" data-user="' + tweet.user + '">@' + nextTweet.user + '</a>: ' + nextTweet.message + '</div>');
    tweetCounter++;
  });

  $('.container').on('click', 'a', function(e) { // in order to have this click event work for dynamically generated content, you need to target the parent container
    // e.preventDefault();
    console.log($('.tweet').length);
  })

});