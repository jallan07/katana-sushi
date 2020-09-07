// Instructions followed here to create a dynamic menu that you can toggle: https://stackoverflow.com/questions/31799603/show-hide-multiple-divs-javascript

var divs = ["specialty", "combo", "nigiri", "sashimi", "desserts"];
var visibleDivId = null;

function divVisibility(divId) {
  if(visibleDivId === divId) {
    visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}