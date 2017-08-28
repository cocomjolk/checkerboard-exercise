window.onload = function(){
myCode();
}

function myCode(){
  console.log('test');

  let container = document.getElementsByTagName('body')[0];

  for (var i = 0; i < 63; i++) {
    //createElement
    let square = document.createElement('div');

    if(i%2===0){
      decorateSquare(square, randomcolors());
    }
    else {
      decorateSquare(square, randomcolors());
    }
    //add it to the DOM
    container.append(square)
  }
}
//make it look like a square
function decorateSquare(sq, color){
  sq.style.width = "11.1%"
  sq.style.paddingBottom = "11.1%"
  sq.style.backgroundColor = color
  sq.style.float = 'left'
}

function randomcolors(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}
