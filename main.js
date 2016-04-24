// function getting images form list and dynamically add to mozaik
// in fuction setting number of images in row
// counting width of image
// counting numbers of rows
// setting filters (grey, color etc.)
// at beggining only same size pictures
var picsInRow = 4
var picWidth = 100 / picsInRow;
var pictures = document.getElementsByTagName('img');
console.log(pictures);
pictures.forEach(function(img) {
  console.log('elo', img)
  img.style.width = picWidth + '%';
});
