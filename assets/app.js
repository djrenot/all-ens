function latest_update() {
  let updated = document.lastModified;
  var footer_updated = document.getElementById('updated');
  return footer_updated.insertAdjacentHTML('afterbegin',updated);
}
// excute when load
latest_update();

async function get_tweets(){
  let fetch_tweets = await fetch('https://api.twitter.com/2/users/2244994945?expansions=pinned_tweet_id&user.fields=created_at&tweet.fields=created_at')
  let tweets_list = await fetch_repo.json();
  // let list = document.getElementById('list-repos');

  // let repo_num = document.getElementById('repo-num');
  // repo_num.innerHTML = repo_list.length;

  // for(let i=0;i<repo_list.length;i++){
  //   let list_item = document.createElement("LI");
  //   list_item.innerHTML = '<a href="' + repo_list[i].html_url + '" target=_blank>' + repo_list[i].name + '</a>' ;
  //   if (repo_list[i].archived == true ) {
  //     let list_item__archived = document.createElement("span");
  //     list_item__archived.setAttribute('class','list-item--archived');
  //     list_item__archived.innerHTML = 'archived';
  //     list_item.appendChild(list_item__archived);
  //   } else {};
  //   list.appendChild(list_item);
  // }
}
get_tweets();