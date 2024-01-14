(function(a) {

var byeSpeaker = {};

var speakWord = "Good Bye";

byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

a.byeSpeaker = byeSpeaker;

})(a);
