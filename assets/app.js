function latest_update() {
  let updated = document.lastModified;
  var footer_updated = document.getElementById('updated');
  return footer_updated.insertAdjacentHTML('afterbegin',updated);
}
// excute when load
latest_update();


// get user data

function get_tweet(){
  // const fetch = require("node-fetch");
  import fetch from 'node-fetch';
  
  const token =  "Bearer AAAAAAAAAAAAAAAAAAAAAJFdQgEAAAAAbcgEdZAvbDqNgbbCVZ%2BGHJcFJoQ%3Dc4Wis2U3krMu3iGlxtEnpMpIPq8fgzl5JLUErlqPEe5WCRu6E9"; // Replace BEARER_TOKEN with your token
  const method = "GET";
  const options = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
  };
  
  fetch("https://api.twitter.com/2/users/2848709654/tweets" , options)
    .then(response => {
        console.log(response);
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
get_tweet()