function latest_update() {
  let updated = document.lastModified;
  var footer_updated = document.getElementById('updated');
  return footer_updated.insertAdjacentHTML('afterbegin',updated);
}
// excute when load
latest_update();