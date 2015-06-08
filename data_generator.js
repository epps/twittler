/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.shawndrost = [];
streams.users.shawndrost.bio = "Shawn is a corrupt finance banker by day, and a dark-web kingpin by night. Guess which activity carries a greater risk.";
streams.users.sharksforcheap = [];
streams.users.sharksforcheap.bio = "Sam 'Sharks For Cheap' Jackson loves B-movie horror films featuring highly intelligent sharks.";
streams.users.mracus = [];
streams.users.mracus.bio = "Marcus Racus often wonders why his parents chose his first name given its similarity with his last.";
streams.users.douglascalhoun = [];
streams.users.douglascalhoun.bio = "Douglas Calhoun sells used cars.";
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user; // accesses user stored in tweet.user and assigns it to variable username
  streams.users[username].push(newTweet); // pushes new tweet to individual streams.users[index] array
  streams.home.push(newTweet); // also pushes new tweet to streams.home array
};
/* 
addTweet accepts a single argument, which is the tweet obj from generateRandomTweet:
tweet = {
  user: "randomly selected from streams.users array"
  message: "randomly generated tweet"
  created_at: new Date()
}
*/

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {}; // local variable that holds an empty object literal
  tweet.user = randomElement(users); // assigns user property to tweet obj using randomElement to pick user from streams.users
  tweet.message = randomMessage(); // assigns message property to tweet obj using randomMessage
  tweet.created_at = new Date(); // assings created_at property to tweet obj 
  addTweet(tweet); // calls addTweet and passes it tweet obj
};

for(var i = 0; i < 10; i++){
  generateRandomTweet();
} // for loop calls generateRandomTweet() ten times to generate the initial batch of tweets shown on the page

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 2000);
};
scheduleNextTweet(); 

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  addTweet(tweet);
};
