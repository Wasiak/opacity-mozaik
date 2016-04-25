// function getting images form list and dynamically add to mozaik
// in fuction setting number of images in row
// setting filters (grey, color etc.)
// at beggining only same size pictures

var picsInRow = 4
var picWidth = Math.round(100 / picsInRow);
var mainImage = document.getElementById('images-container');
var rowNumber;
var picturesNumber;
var pictures = document.getElementsByTagName('img');

pictures[0].onload = function(evt) {
  console.log(evt.target.offsetHeight);
  rowNumber = Math.ceil(mainImage.offsetHeight / evt.target.offsetHeight);
  picturesNumber = rowNumber * picsInRow;
  // console.log(rowNumber, picturesNumber)
}

// make array from DOMelements
var myDOMArray = Array.prototype.slice.call(pictures);

myDOMArray.forEach(function(img) {
  img.style.width = picWidth + '%';
});
