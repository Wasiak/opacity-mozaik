// in fuction setting number of images in row
// setting filters (grey, color etc.)
// at beggining only same size pictures
var imagesNames = ['1', '2', '3', '4'];

var picsInRow = 4;
var picWidth = Math.round(100 / picsInRow);
var mainImage = document.getElementById('images-container');
var rowNumber;
var picturesNumber;

var pic = document.createElement('img');
mainImage.appendChild(pic);
pic.src = 'images/' + imagesNames[0] + '.jpg';
pic.style.width = picWidth + '%';

var addPictures = function() {
  var j = 1;
  for (i = 1; i < picturesNumber; i++) {
    var pic = document.createElement('img');
    mainImage.appendChild(pic);
    if (j > imagesNames.length - 1) {
      j = 0;
    }
    pic.src = 'images/' + imagesNames[j] + '.jpg';
    j++;
  }
}

pic.onload = function(evt) {
  rowNumber = Math.ceil(mainImage.offsetHeight / evt.target.offsetHeight);
  picturesNumber = rowNumber * picsInRow;
  addPictures();

  var pictures = document.getElementsByTagName('img');
  // make array from DOMelements
  var myDOMArray = Array.prototype.slice.call(pictures);

  myDOMArray.forEach(function(img) {
    img.style.width = picWidth + '%';
  });
}


