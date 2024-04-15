document.getElementById('generateColor').addEventListener('click', function() {
   
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var backgroundColor = "#" + red.toString(16) + green.toString(16) + blue.toString(16);

    
    document.body.style.backgroundColor = backgroundColor;
});