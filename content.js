var shortcut_elements = new Map();

document.addEventListener('keypress', function (key) {
  if (shortcut_elements.size != 5) {
    console.log("Shortcut elements not populted!!");
    return;
  }
  try {
    shortcut_elements.get(key.key.toUpperCase()).click();
  } catch (e) {
    console.log(e);
  } finally {
  }
});

function get_shortcut_elemets() {
  var all_ele = document.getElementsByTagName("*");
  for (var i=0; i<all_ele.length; i++) {
    if (all_ele[i].title == 'Home'
        || all_ele[i].title == 'Trending'
        || all_ele[i].title == 'Subscriptions'
        || all_ele[i].title == 'Library'
        || all_ele[i].title == 'Watch later'
      ){
      if (shortcut_elements.has(all_ele[i].innerText.charAt(0)) == false) {
        shortcut_elements.set(all_ele[i].innerText.charAt(0), all_ele[i]);
      }
    }
  }
}
get_shortcut_elemets();
