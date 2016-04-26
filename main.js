// in fuction setting number of images in row
// setting filters (grey, color etc.)
// at beggining only same size pictures
var imagesNames = ['1', '2', '3', '4'];

var picsInRow = 6;
var picPercentageWidth = 100 / picsInRow;
var picWidth;
var picHeight;
var mainImage = document.getElementById('images-container');
var rowNumber;
var picturesNumber;

var pic = document.createElement('img');
mainImage.appendChild(pic);
pic.src = 'images/' + imagesNames[0] + '.jpg';
pic.style.width = picPercentageWidth + '%';

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var addImage = function(source, left, top){
  console.log(source)
  image = new Image();
  image.src = source;
  image.onload = function(){
    console.log(image.src);
    context.globalAlpha = 0.4;
    context.drawImage(this, left, top, picWidth, picHeight);
    context.globalAlpha = 1;
  }
}

var addPictures = function() {
  var j = 0;
  var left = 0;
  var top = 0;
  var t = 0;
  var l = 0;
  for (i = 0; i < picturesNumber; i++) {
    j = j > imagesNames.length - 1 ? 0 : j;
    
    t = l > picsInRow -1 ? t += 1 : t;
    l = l > picsInRow - 1 ? 0 : l;

    left = l * picWidth;
    top = t * picHeight;
    
    var src = 'images/' + imagesNames[j] + '.jpg';

    addImage(src, left, top);
    j++;
    l++;
  }
}

pic.onload = function(evt) {
  rowNumber = Math.ceil(mainImage.offsetHeight / evt.target.offsetHeight);
  picturesNumber = rowNumber * picsInRow;
  picHeight = evt.target.offsetHeight;
  picWidth = (picPercentageWidth /100) * canvas.offsetWidth;
  addPictures();

  var pictures = document.getElementsByTagName('img');
  // make array from DOMelements
  var myDOMArray = Array.prototype.slice.call(pictures);

  myDOMArray.forEach(function(img) {
    img.style.width = picPercentageWidth + '%';
  });
}


