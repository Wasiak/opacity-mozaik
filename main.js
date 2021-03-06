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
var addedImages = 0;

// add picture to get size of small images
var pic = document.createElement('img');
pic.id = 'control-image';
mainImage.appendChild(pic);
pic.src = 'images/' + imagesNames[0] + '.jpg';
pic.style.width = picPercentageWidth + '%';

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var addImage = function(source, left, top){
  image = new Image();
  image.src = source;
  image.onload = function(){
    context.globalAlpha = 0.4;
    context.drawImage(this, left, top, picWidth, picHeight);
    context.globalAlpha = 1;
    addedImages++;
    // after load if addedNumber is equal to number of all pictures
    // run filter function for whole canvas
    if (addedImages === picturesNumber) {
      makeGrey();
    }
  }
}

var makeGrey = function() {
  var pixels = context.getImageData(0, 0, canvas.offsetWidth, canvas.offsetHeight);
  var d = pixels.data;
  for (var i = 0; i < d.length; i += 4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    // CIE luminance for the RGB
    // The human eye is bad at seeing red and blue, so we de-emphasize them.
    var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    d[i] = d[i + 1] = d[i + 2] = v;
  }
  context.putImageData(pixels, 0, 0);
  document.getElementById('loader').classList.remove('visible');
}


var addPictures = function() {
  // j is index of image in images array
  var j = 0;
  var left = 0;
  var top = 0;
  // t counter of row (from top)
  var t = 0;
  // l counter of image left (l = index of photo from left side)
  var l = 0;
  for (i = 0; i < picturesNumber; i++) {
    // if added last image return to first one
    j = j > imagesNames.length - 1 ? 0 : j;
    // if reach limit of images in row increase level of row form top
    t = l > picsInRow -1 ? t += 1 : t;
    // if reach limit of photo in row, next photo has left 0 position
    l = l > picsInRow - 1 ? 0 : l;

    left = l * picWidth;
    top = t * picHeight;
    
    var src = 'images/' + imagesNames[j] + '.jpg';

    addImage(src, left, top);
    j++;
    l++;
  }
}

// get and set size for small images
pic.onload = function(evt) {
  rowNumber = Math.ceil(mainImage.offsetHeight / evt.target.offsetHeight);
  picturesNumber = rowNumber * picsInRow;
  picHeight = evt.target.offsetHeight;
  picWidth = (picPercentageWidth /100) * canvas.offsetWidth;
  addPictures();

  document.getElementById('control-image').style.width = picPercentageWidth + '%';
}


