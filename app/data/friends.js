var friendsObj = {
  friends: [],
  addFriend: function(friend){
    this.friends.push(friend);
  },
  matchFriend: function(user_score){
    var placeholder = 0;
    var difference = Infinity;
    var match_name = "";
    var match_photo = "";

    var currentFriends = this.friends;

    //since the newest friend is always pushed to the end, the compairson is made to all others before it
    if (currentFriends.length > 1) {
      for (var i = 0; i < currentFriends.length - 1; i++) {
        for (var j = 0; j < currentFriends[i].score.length; i++) {
          placeholder += Math.abs(currentFriends[i].score[j] - user_score[j])
        }
        if (placeholder < difference) {
          difference = placeholder;
          match_name = currentFriends[i].name;
          match_photo = currentFriends[i].photo;
        }
      }
    }
    console.log(match_name);
    console.log(match_photo);
  }
}

module.exports = friendsObj;
